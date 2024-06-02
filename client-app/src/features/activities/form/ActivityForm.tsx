import { useState, useEffect } from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layouts/LoadingComponent";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextAreaInput from "../../../app/common/form/MyTextArea";
import MyDateInput from "../../../app/common/form/MyDateInput";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryOptions } from "../../../app/common/options/categoryOptions";
import { v4 as uuid } from "uuid";

export default observer(function ActivityForm() {
	const { activityStore } = useStore();
	const {
		createActivity,
		updateActivity,
		loadActivity,
		loadingInitial,
	} = activityStore;
	const { id } = useParams();
	const navigate = useNavigate();

	const [activity, setActivity] = useState<Activity>({
		id: "",
		title: "",
		category: "",
		description: "",
		date: null,
		city: "",
		venue: "",
	});

	const validationSchema = Yup.object({
		title: Yup.string().required("The activity title is required"),
		description: Yup.string().required(),
		category: Yup.string().required(),
		date: Yup.string().required("Date is required").nullable(),
		city: Yup.string().required(),
		venue: Yup.string().required(),
	});

	useEffect(() => {
		if (id) loadActivity(id).then((activity) => setActivity(activity!));
	}, [id, loadActivity]);

	// const initialState = selectedActivity ?? {
	// 	id: "",
	// 	title: "",
	// 	category: "",
	// 	description: "",
	// 	date: "",
	// 	city: "",
	// 	venue: "",
	// };
	// const [activity, setActivity] = useState(initialState);

	function handleFormSubmit(activity: Activity) {
		if (!activity.id) {
			activity.id = uuid();
			createActivity(activity).then(() =>
				navigate(`/activities/${activity.id}`)
			);
		} else {
			updateActivity(activity).then(() =>
				navigate(`/activities/${activity.id}`)
			);
		}
		activity.id ? updateActivity(activity) : createActivity(activity);
	}

	// function handleChange(
	// 	event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	// ) {
	// 	const { name, value } = event.target;
	// 	setActivity({ ...activity, [name]: value });
	// }

	if (loadingInitial) return <LoadingComponent content="Loading activity..." />;

	return (
		<Segment clearing>
			<Header content="Activity Details" color="teal" />
			<Formik
				validationSchema={validationSchema}
				enableReinitialize
				initialValues={activity}
				onSubmit={(values) => handleFormSubmit(values)}
			>
				{({ handleSubmit, isValid, isSubmitting, dirty }) => (
					<Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
						{/* <FormField>
							<Field placeholder="Title" name="title" />
							<ErrorMessage
								name="title"
								render={(error) => <Label content={error} color="red" />}
							/>
						</FormField> */}
						<MyTextInput name="title" placeholder="Title" />
						<MyTextAreaInput
							placeholder="Description"
							name="description"
							rows={3}
						/>
						<MySelectInput
							options={categoryOptions}
							placeholder="Category"
							name="category"
						/>
						<MyDateInput
							showTimeSelect
							timeCaption="time"
							dateFormat="MMM d, yyyy h:mm aa"
							placeholderText="Date"
							name="date"
						/>
						<Header content="Location Details" color="teal" />
						<MyTextInput placeholder="City" name="city" />
						<MyTextInput placeholder="Venue" name="venue" />
						<Button
							disabled={isSubmitting || !dirty || !isValid}
							floated="left"
							positive
							type="submit"
							content="Submit"
						/>
						<Button
							as={Link}
							to={`/activities`}
							floated="left"
							type="button"
							content="Cancel"
						/>
					</Form>
				)}
			</Formik>
		</Segment>
	);
});

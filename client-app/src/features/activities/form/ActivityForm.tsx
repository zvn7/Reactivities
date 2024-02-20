import React, { useState, ChangeEvent, useEffect } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layouts/LoadingComponent";
import { v4 as uuid } from "uuid";

export default observer(function ActivityForm() {
	const { activityStore } = useStore();
	const {
		selectedActivity,
		createActivity,
		updateActivity,
		loading,
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
		date: "",
		city: "",
		venue: "",
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

	function handleSubmit() {
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

	function handleInputChanged(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = event.target;
		setActivity({ ...activity, [name]: value });
	}

	if (loadingInitial) return <LoadingComponent content="Loading activity..." />;

	return (
		<Segment clearing>
			<Form onSubmit={handleSubmit} autoComplete="off">
				<Form.Input
					placeholder="Title"
					value={activity.title}
					name="title"
					onChange={handleInputChanged}
				/>
				<Form.TextArea
					placeholder="Description"
					value={activity.description}
					name="description"
					onChange={handleInputChanged}
				/>
				<Form.Input
					placeholder="Category"
					value={activity.category}
					name="category"
					onChange={handleInputChanged}
				/>
				<Form.Input
					type="date"
					placeholder="Date"
					value={activity.date}
					name="date"
					onChange={handleInputChanged}
				/>
				<Form.Input
					placeholder="City"
					value={activity.city}
					name="city"
					onChange={handleInputChanged}
				/>
				<Form.Input
					placeholder="Venue"
					value={activity.venue}
					name="venue"
					onChange={handleInputChanged}
				/>
				<Button floated="left" positive type="submit" content="Submit" />
				<Button
					as={Link}
					to={`/activities`}
					floated="left"
					type="button"
					content="Cancel"
				/>
			</Form>
		</Segment>
	);
});

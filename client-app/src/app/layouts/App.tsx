import { useEffect } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import LoadingComponent from "./LoadingComponent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import { ToastContainer } from "react-toastify";
import ModalContainer from "../common/modals/ModalContainer";

function App() {
	// const { activityStore } = useStore();
	// const [activities, setActivities] = useState<Activity[]>([]);
	// const [selectedActivity, setSelectedActivity] = useState<
	// 	Activity | undefined
	// >(undefined);
	// const [editMode, setEditMode] = useState(false);
	// const [submitting, setSubmitting] = useState(false);

	// useEffect(() => {
	// 	axios
	// 		.get<Activity[]>("http://localhost:5000/api/activities")
	// 		.then((response) => {
	// 			console.log(response);
	// 			setActivities(response.data);
	// 		});
	// }, []);

	// useEffect(() => {
	// 	activityStore.loadActivities();
	// }, []);

	// function handleSelectActivity(id: string) {
	// 	setSelectedActivity(activities.find((x) => x.id === id));
	// }

	// function handleCancelSelectActivity() {
	// 	setSelectedActivity(undefined);
	// }

	// function handleFormOpen(id?: string) {
	// 	id ? handleSelectActivity(id) : handleCancelSelectActivity();
	// 	setEditMode(true);
	// }

	// function handleFormClose() {
	// 	setEditMode(false);
	// }

	// function handleDeleteActivity(id: string) {
	// 	setSubmitting(true);
	// 	agent.Activities.delete(id).then(() => {
	// 		setActivities([...activities.filter((x) => x.id !== id)]);
	// 		setSubmitting(false);
	// 	});
	// }

	// if (activityStore.loadingInitial)
	// 	return <LoadingComponent content="Loading app" />;

	const location = useLocation();
	const { commonStore, userStore } = useStore();

	useEffect(() => {
		if (commonStore.token) {
			userStore.getUser().finally(() => commonStore.setAppLoaded());
		} else {
			commonStore.setAppLoaded();
		}
	}, [commonStore, userStore]);

	if (!commonStore.appLoaded)
		return <LoadingComponent content="Loading App..." />;

	return (
		<>
			{/* <ToastContainer position="bottom-right" theme="colored" hideProgressBar /> */}
			<ModalContainer />
			<ToastContainer position="bottom-right" />
			{location.pathname === "/" ? (
				<HomePage />
			) : (
				<>
					<NavBar />
					<Container style={{ marginTop: "7em" }}>
						<Outlet />
					</Container>
				</>
			)}
		</>
	);
}

export default observer(App);

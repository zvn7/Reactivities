import { useEffect, useState } from "react";
import { Button, Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";

function App() {
	const location = useLocation();
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

	return (
		<>
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

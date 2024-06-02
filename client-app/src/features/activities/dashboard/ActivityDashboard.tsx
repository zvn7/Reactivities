import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../../../app/common/form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layouts/LoadingComponent";
import ActivityFilter from "./ActivityFilter";

export default observer(function ActivityDashboard() {
	const { activityStore } = useStore();
	const { loadActivities, activityRegistry } = activityStore;
	// const { selectedActivity, editMode } = activityStore;

	useEffect(() => {
		if (activityRegistry.size <= 1) loadActivities();
	}, [loadActivities]);

	if (activityStore.loadingInitial)
		return <LoadingComponent content="Loading app" />;

	return (
		<Grid>
			<Grid.Column mobile={16} tablet={10} computer={10}>
				<ActivityList />
			</Grid.Column>
			<Grid.Column mobile={16} tablet={6} computer={6}>
				<ActivityFilter />
			</Grid.Column>
		</Grid>
	);
});

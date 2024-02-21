import React, { useEffect } from "react";
import { Button, Card, Grid, Icon, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layouts/LoadingComponent";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

export default observer(function ActivityDetail() {
	const { activityStore } = useStore();

	const {
		selectedActivity: activity,
		loadActivity,
		loadingInitial,
	} = activityStore;

	const { id } = useParams();

	useEffect(() => {
		if (id) loadActivity(id);
	}, [id, loadActivity]);

	if (loadingInitial || !activity) return <LoadingComponent />;

	return (
		<Grid>
            <Grid.Column width='10'>
                <ActivityDetailedHeader activity={activity}/>
                <ActivityDetailedInfo activity={activity} />
                <ActivityDetailedChat  />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityDetailedSidebar  />
            </Grid.Column>
        </Grid>
	);
});

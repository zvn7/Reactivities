import React, { SyntheticEvent } from "react";
import { Activity } from "../../../app/models/activity";
import { Button, Card, Icon, Image, Label } from "semantic-ui-react";

interface Props {
	activities: Activity[];
	selectActivity: (id: string) => void;
	deleteActivity: (id: string) => void;
	submitting: boolean;
}

export default function ActivityList({
	activities,
	selectActivity,
	deleteActivity,
	submitting,
}: Props) {
	const [target, setTarget] = React.useState("");
	function handleActivityDelete(
		e: SyntheticEvent<HTMLButtonElement>,
		id: string
	) {
		setTarget(e.currentTarget.name);
		deleteActivity(id);
	}

	return (
		<Card.Group itemsPerRow={2} stackable>
			{activities.map((activity) => (
				<Card key={activity.id}>
					{/* <Image
						src={`/assets/categoryImages/${activity.category}.jpg`}
						wrapped
						ui={false}
					/> */}
					<Card.Content>
						<Card.Header>{activity.title}</Card.Header>
						<Card.Meta>
							<Icon name="calendar" /> {activity.date}
							{/* {new Date(activity.date).toLocaleDateString("en-US", {
								weekday: "short",
								year: "numeric",
								month: "short",
								day: "numeric",
							})} */}
						</Card.Meta>
						<Card.Description>
							<p>{activity.description}</p>
							<p>
								<Icon name="map marker alternate" /> {activity.city},{" "}
								{activity.venue}
							</p>
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<div style={{ marginBottom: "10px" }}>
							<Label basic content={activity.category} />
						</div>
						<div className="ui two buttons">
							<Button onClick={() => selectActivity(activity.id)} color="blue">
								View
							</Button>
							<Button
								name={activity.id}
								loading={submitting && target === activity.id}
								onClick={(e) => handleActivityDelete(e, activity.id)}
								color="red"
							>
								Delete
							</Button>
						</div>
					</Card.Content>
				</Card>
			))}
		</Card.Group>
	);
}

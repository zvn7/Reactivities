import React from "react";
import { Activity } from "../../../app/models/activity";
import { Button, Item, Label, Segment } from "semantic-ui-react";

interface Props {
	activities: Activity[];
	selectActivity: (id: string) => void;
	deleteActivity: (id: string) => void;
}

const ActivityList: React.FC<Props> = ({
	activities,
	selectActivity,
	deleteActivity,
}: Props) => {
	return (
		<Segment>
			<Item.Group divided>
				{activities.map((activity) => (
					<Item key={activity.id}>
						<Item.Content>
							<Item.Header>{activity.title}</Item.Header>
							<Item.Meta>{activity.date}</Item.Meta>
							<Item.Description>
								<p>{activity.description}</p>
								<p>
									{activity.city}, {activity.venue}
								</p>
							</Item.Description>
							<Item.Extra>
								<Button
									onClick={() => selectActivity(activity.id)}
									floated="right"
									content="View"
									color="blue"
								>
									View
								</Button>
								<Button
									onClick={() => deleteActivity(activity.id)}
									floated="right"
									content="Delete"
									color="red"
								>
									Delete
								</Button>
								<Label basic content={activity.category} />
							</Item.Extra>
						</Item.Content>
					</Item>
				))}
			</Item.Group>
		</Segment>
	);
};

export default ActivityList;

import { observer } from "mobx-react-lite";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";

interface Props {
	activity: Activity;
}

export default observer(function ActivityListItem({ activity }: Props) {
	return (
		<Segment.Group>
			<Segment>
				<Item.Group>
					<Item>
						<Item.Image size="tiny" circular src="/assets/user.png" />
						<Item.Content>
							<Item.Header as={Link} to={`/activities/${activity.id}`}>
								{activity.title}
							</Item.Header>
							<Item.Description>Hosted by Ilham</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
			</Segment>
			<Segment>
				<span>
					<Icon name="clock" /> {activity.date}
					<Icon name="marker" /> {activity.venue}
				</span>
			</Segment>
			<Segment secondary>Attendees will go here</Segment>
			<Segment clearing>
				<span>
					<Icon name="info" /> {activity.description}
				</span>
				<Button
					as={Link}
					to={`/activities/${activity.id}`}
					color="teal"
					floated="right"
					content="View"
				/>
			</Segment>
		</Segment.Group>
	);
});

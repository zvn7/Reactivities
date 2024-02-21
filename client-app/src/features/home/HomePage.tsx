import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header, Segment, Image } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";

export default observer(function HomePage() {
	return (
		<Segment inverted textAlign="center" vertical className="masthead">
			<Container text>
				<Header as="h1" inverted>
					<Image
						size="massive"
						src="/assets/logo.png"
						alt="logo"
						style={{ marginBottom: 12 }}
					/>
					Reactivities
				</Header>
				<Header as="h2" inverted content="Welcome to Reactivities" />
				<Button as={Link} to="/activities" size="huge" inverted>
					Go to activities!
				</Button>
				{/* <Button size="huge" inverted>
					Login!
				</Button>
				<Button size="huge" inverted>
					Register
				</Button> */}
			</Container>
		</Segment>
	);
});

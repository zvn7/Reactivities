import React from "react";
import { Button, Container, Menu, Image } from "semantic-ui-react";
import { useStore } from "../stores/store";
import { NavLink } from "react-router-dom";

export default function NavBar() {
	// const { activityStore } = useStore();
	return (
		<Menu inverted fixed="top" borderless>
			<Container>
				<Menu.Item as={NavLink} to="/" header>
					<Image src="/assets/logo.png" alt="logo" size="mini" />
					Reactivities
				</Menu.Item>
				<Menu.Item
					as={NavLink}
					to="/activities"
					content={"Activities"}
					name="Activities"
				/>
				<Menu.Menu position="right">
					<Menu.Item>
						<Button
							as={NavLink}
							to="/createActivity"
							primary
							content="Create Activity"
						/>
					</Menu.Item>
				</Menu.Menu>
			</Container>
		</Menu>
	);
}

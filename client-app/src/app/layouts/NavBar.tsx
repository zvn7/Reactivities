import React from "react";
import { Button, Container, Menu, Image } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function NavBar() {
	const { activityStore } = useStore();
	return (
		<Menu inverted fixed="top" borderless>
			<Container>
				<Menu.Item header>
					<Image src="/assets/logo.png" alt="logo" size="mini" />
					Reactivities
				</Menu.Item>
				<Menu.Item name="Activities" />
				<Menu.Menu position="right">
					<Menu.Item>
						<Button onClick={() => activityStore.openForm()} primary content="Create Activity" />
					</Menu.Item>
				</Menu.Menu>
			</Container>
		</Menu>
	);
}

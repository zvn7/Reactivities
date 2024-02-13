import React from "react";
import { Button, Container, Menu, Image } from "semantic-ui-react";

interface Props {
	openForm: () => void;
}

export default function NavBar({ openForm }: Props) {
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
						<Button onClick={openForm} primary content="Create Activity" />
					</Menu.Item>
				</Menu.Menu>
			</Container>
		</Menu>
	);
}

import React from "react";
import { Button, Container, Menu, Image, Dropdown } from "semantic-ui-react";
import { useStore } from "../stores/store";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";

export default observer(function NavBar() {
	const {
		userStore: { user, logout },
	} = useStore();
	// const { activityStore } = useStore();
	return (
		<Menu inverted fixed="top" borderless>
			<Container>
				<Menu.Item as={NavLink} to="/" header>
					<Image src="/assets/logo.png" alt="logo" size="mini" />
					Reactivities
				</Menu.Item>
				<Menu.Item as={NavLink} to="/activities" name="Activities" />
				<Menu.Item as={NavLink} to="/errors" name="Errors" />
				<Menu.Menu position="right">
					<Menu.Item>
						<Button
							as={NavLink}
							to="/createActivity"
							primary
							content="Create Activity"
						/>
					</Menu.Item>
					<Menu.Item position="right">
						<Image
							src={user?.image || "/assets/user.png"}
							avatar
							spaced="right"
						/>
						<Dropdown pointing="top left" text={user?.displayName}>
							<Dropdown.Menu>
								<Dropdown.Item
									as={NavLink}
									to={`/profiles/${user?.username}`}
									text="My Profile"
									icon="user"
								/>
								<Dropdown.Item onClick={logout} text="Logout" icon="power" />
							</Dropdown.Menu>
						</Dropdown>
					</Menu.Item>
				</Menu.Menu>
			</Container>
		</Menu>
	);
});

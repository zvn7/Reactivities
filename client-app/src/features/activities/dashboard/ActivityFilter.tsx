import { observer } from "mobx-react-lite";
import React from "react";
import { Header, Menu } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import Calendar from "react-calendar";

export default function ActivityFilter() {
	return (
		<>
			<Menu vertical size="large" style={{ width: "100%", marginTop: 25 }}>
				<Header icon="filter" attached color="teal" content="Filters" />
				<Menu.Item content="All Activites" />
				<Menu.Item content="I'm going" />
				<Menu.Item content="I'm hosting" />
			</Menu>
			<Header />
			<Calendar />
		</>
	);
}

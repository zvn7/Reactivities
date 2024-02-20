import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetail from "../../features/activities/details/ActivityDetail";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "activities",
				element: <ActivityDashboard />,
			},
			{
				path: "activities/:id",
				element: <ActivityDetail />,
			},
			{
				path: "createActivity",
				element: <ActivityForm key="create" />,
			},
			{
				path: "manage/:id",
				element: <ActivityForm key="manage" />,
			},
		],
	},
];

export const router = createBrowserRouter(routes);

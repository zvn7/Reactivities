import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
// import ActivityForm from "../common/form/ActivityForm";
import ActivityDetail from "../../features/activities/details/ActivityDetail";
import TestErrors from "../../features/errors/TestError";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import ActivityForm from "../../features/activities/form/ActivityForm";
import LoginForm from "../../features/users/LoginForm";

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
			{
				path: "login",
				element: <LoginForm />,
			},
			{
				path: "errors",
				element: <TestErrors />,
			},
			{
				path: "not-found",
				element: <NotFound />,
			},
			{
				path: "server-error",
				element: <ServerError />,
			},
			{
				path: "*",
				element: <Navigate replace to="/not-found" />,
			},
		],
	},
];

export const router = createBrowserRouter(routes);

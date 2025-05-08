import NotFound from "../pages/notFound/NotFound";
import Login from "../pages/login";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Club from "../pages/club";
import Activity from "../pages/activity";
import ClubDetail from "../pages/club/c-pages/clubDetail";
import ActivityDetail from "../pages/activity/c-pages/activityDetail";
import User from "../pages/user";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/club" />,
  },
  {
    path: "/club",
    element: <Club />,
  },
  {
    path: "/club/detail/:name",
    element: <ClubDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/activity",
    element: <Activity />,
    children: [
      {
        path: "/activity/detail/:id",
        element: <ActivityDetail />,
      },
    ],
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;

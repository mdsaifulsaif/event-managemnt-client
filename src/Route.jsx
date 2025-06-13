import { createBrowserRouter } from "react-router";
import Mainlayout from "./mainlayout/Mainlayout";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
import CreateEvent from "./Components/CreateEvent";
import UpcomingEvents from "./Pages/UpcomingEvents";
import EventDetails from "./Pages/EventDetails";
import JoindedEvents from "./Pages/JoindedEvents";
import ManageEvents from "./Pages/ManageEvents";
import UpdateEvent from "./Pages/UpdateEvent";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "create-event",
        element: (
          <PrivetRoute>
            <CreateEvent></CreateEvent>
          </PrivetRoute>
        ),
        // Component: CreateEvent,
      },
      {
        path: "upcoming-events",
        loader: () =>
          fetch(`http://localhost:3000/events`, {
            credentials: "include",
          }),
        Component: UpcomingEvents,
      },
      {
        path: "event-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/event/${params.id}`),
        // Component: EventDetails,
        element: (
          <PrivetRoute>
            <EventDetails></EventDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "joined-events",
        loader: () =>
          fetch("http://localhost:3000/joinded-Events", {
            credentials: "include",
          }),
        element: (
          <PrivetRoute>
            <JoindedEvents></JoindedEvents>
          </PrivetRoute>
        ),
      },
      {
        path: "/manage-events/:userEmail",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/user-events?email=${params.userEmail}`, {
            credentials: "include",
          }),
        element: (
          <PrivetRoute>
            <ManageEvents></ManageEvents>
          </PrivetRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/event/${params.id}`),
        Component: UpdateEvent,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
  {
    path: "*",
    Component: Error404,
  },
]);

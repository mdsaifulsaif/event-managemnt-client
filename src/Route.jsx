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
        Component: CreateEvent,
      },
      {
        path: "upcoming-events",
        loader: () => fetch("http://localhost:3000/events"),
        Component: UpcomingEvents,
      },
      {
        path: "event-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/event/${params.id}`),
        Component: EventDetails,
      },
      {
        path: "joined-events",
        loader: () => fetch("http://localhost:3000/joinded-Events"),
        Component: JoindedEvents,
      },
      {
        path: "/manage-events/:userEmail",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/user-events?email=${params.userEmail}`),
        Component: ManageEvents,
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
    ],
  },
  {
    path: "*",
    Component: Error404,
  },
]);

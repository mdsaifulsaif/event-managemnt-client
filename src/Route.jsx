import { createBrowserRouter } from "react-router";
import Mainlayout from "./mainlayout/Mainlayout";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
import CreateEvent from "./Components/CreateEvent";
import UpcomingEvents from "./Pages/UpcomingEvents";
import EventDetails from "./Pages/EventDetails";

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
    ],
  },
  {
    path: "*",
    Component: Error404,
  },
]);

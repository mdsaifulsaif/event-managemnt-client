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
import LoaddingSpinner from "./Components/LoaddingSpinner";
import Allevents from "./Pages/Allevents";

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
        Component: UpcomingEvents,
      },
      {
        path: "event-details/:id",
        loader: ({ params }) =>
          fetch(`https://server-site-ruby-eight.vercel.app/event/${params.id}`),
        hydrateFallbackElement: <LoaddingSpinner></LoaddingSpinner>,
        element: (
          <PrivetRoute>
            <EventDetails></EventDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/joined-events/:email",
        loader: ({ params }) =>
          fetch(
            `https://server-site-ruby-eight.vercel.app/joinded-Events/${params.email}`,
            {
              credentials: "include",
            }
          ),
        hydrateFallbackElement: <LoaddingSpinner></LoaddingSpinner>,
        element: (
          <PrivetRoute>
            <JoindedEvents></JoindedEvents>
          </PrivetRoute>
        ),
      },
      {
        path: "/manage-events/:userEmail",
        loader: ({ params }) =>
          fetch(
            `https://server-site-ruby-eight.vercel.app/user-events?email=${params.userEmail}`,
            {
              credentials: "include",
            }
          ),
        hydrateFallbackElement: <LoaddingSpinner></LoaddingSpinner>,
        element: (
          <PrivetRoute>
            <ManageEvents></ManageEvents>
          </PrivetRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`https://server-site-ruby-eight.vercel.app/event/${params.id}`),
        hydrateFallbackElement: <LoaddingSpinner></LoaddingSpinner>,
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

import { createBrowserRouter } from "react-router";
import Mainlayout from "./mainlayout/Mainlayout";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";

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
    ],
  },
  {
    path: "*",
    Component: Error404,
  },
]);

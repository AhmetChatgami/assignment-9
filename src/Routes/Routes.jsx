import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";

import ToysDetails from "../Pages/ToysDetails";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ToysGallery from "../Pages/ToysGallery";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/toysData.json"),
      },
      {
       path: "/toysgallery",
       element: <ToysGallery/>
      },
      {
        path: "/details/:id",
        element: <ToysDetails />,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;

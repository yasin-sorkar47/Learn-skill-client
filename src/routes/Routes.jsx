import { createBrowserRouter } from "react-router-dom";
import Main from "../layOuts/Main";
import AddService from "../pages/AddService";
import AllServices from "../pages/AllServices";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ManageServices from "../pages/ManageService";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import UpdateService from "../pages/UpdateService";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/services?limit=4"),
      },
      {
        path: "/services",
        element: <AllServices />,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoutes>
            <AddService />
          </PrivateRoutes>
        ),
      },
      {
        path: "/manageService",
        element: (
          <PrivateRoutes>
            <ManageServices />
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateService/:id",
        element: (
          <PrivateRoutes>
            <UpdateService />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export { router };

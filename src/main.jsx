import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/login";
import AuthProviders from "./providers/AuthProviders";
import Orders from "./component/Orders";
import PrivateRoutes from "./component/Routes/PrivateRoutes";
import UserProfie from "./component/UserProfie/UserProfie";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/home", element: <Home></Home> },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '/order',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: '/uspro',
        element: <PrivateRoutes><UserProfie></UserProfie></PrivateRoutes>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);

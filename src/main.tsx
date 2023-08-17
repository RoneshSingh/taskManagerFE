import React from "react";

import ReactDOM from "react-dom/client";

import App from "./pages/App.tsx";

import "./index.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Outlet />
      </>
    ),

    children: [
      {
        path: "/",

        element: <Home />,
      },

      {
        path: "/app",

        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

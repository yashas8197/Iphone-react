import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Features from "./pages/Features";
import Specification from "./pages/Specification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/specification",
    element: <Specification />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

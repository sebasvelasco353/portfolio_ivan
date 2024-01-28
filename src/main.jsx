import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import App from "./App.jsx";
import Starkcore from "./pages/Starkcore.jsx"

const router = createHashRouter([{
  path: '/',
  element: <App />
},{
  path: '/starkcore',
  element: <Starkcore />
}]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <RouterProvider router={router} />
  </NextUIProvider>
);

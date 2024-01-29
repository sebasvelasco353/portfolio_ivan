import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import App from "./App.jsx";
import Starkcore from "./pages/Starkcore.jsx"
import Creditapp from "./pages/Creditapp.jsx"
import Dbconseils from "./pages/Dbconseils.jsx"
import Codemagic from "./pages/Codemagic.jsx"
import Candc from "./pages/Candc.jsx"
import Advanseez from "./pages/Advanseez.jsx"
import Kustee from "./pages/Kustee.jsx"
import Iphinity from "./pages/Iphinity.jsx"

const router = createHashRouter([{
  path: '/',
  element: <App />
},{
  path: '/starkcore',
  element: <Starkcore />
},{
  path: '/creditapp',
  element: <Creditapp />
},{
  path: '/dbconseils',
  element: <Dbconseils />
},{
  path: '/codemagic',
  element: <Codemagic />
},{
  path: '/candc',
  element: <Candc />
},{
  path: '/advanseez',
  element: <Advanseez />
},{
  path: '/kustee',
  element: <Kustee />
},{
  path: '/iphinity',
  element: <Iphinity />
}]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <RouterProvider router={router} />
  </NextUIProvider>
);

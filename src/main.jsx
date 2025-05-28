import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Academics from "./Pages/Academics";
import Admissions from "./Pages/Admissions";
import StudentLife from "./Pages/StudentLife";
import Contact from "./Pages/Contact";

const routers = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "Academics",
          element: <Academics />,
        },
        {
          path: "Admissions",
          element: <Admissions />,
        },
        {
          path: "StudentLife",
          element: <StudentLife />,
        },
        {
          path: "Contact",
          element: <Contact />,
        },
      ],
    },
  ],
  { basename: "/Task_3" }
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>
);

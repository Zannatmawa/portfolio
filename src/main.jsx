import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from "./App";
import "./index.css";
import Home from "./components/Home";
import AboutMe from "./components/pages/About";
import Skills from "./components/pages/Skills";
import ProjectsSection from "./components/pages/projectSection";
import Contact from "./components/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <ProjectsSection />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

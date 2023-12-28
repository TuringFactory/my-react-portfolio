import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";
import WorkExperience from "./components/workexperience";
import MyNavbar from "./components/navbar";
import EducationPage from "./components/educationPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
document.body.style.background = "#f3e0dc";

const router = createHashRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/workexperience",
    element: <WorkExperience></WorkExperience>,
  },
  {
    path: "/education",
    element: <EducationPage></EducationPage>,
  },
]);

root.render(
  <React.Fragment>
    <MyNavbar></MyNavbar>
    <RouterProvider router={router} />
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

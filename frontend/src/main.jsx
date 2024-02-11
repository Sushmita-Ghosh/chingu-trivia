import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import QuizQuestionContainer from "./components/QuizQuestionContainer/QuizQuestionContainer.jsx";
import QuizMain from "./components/QuizMain/QuizMain.jsx";
import Authentication from "./components/Authentication/Authentication.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <QuizMain />,
      },
      {
        path: "/quiz",
        element: <QuizQuestionContainer />,
      },
      {
        path: "/login",
        element: <Authentication />,
      },
      {
        path: "*",
        element: <div>Error</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

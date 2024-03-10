import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Main from "../Layouts/Main";
import SignUp from "../Authentications/SignUp/SignUp";

export const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "SignUp",
        element: <SignUp />,
      },
    ],
  },
]);

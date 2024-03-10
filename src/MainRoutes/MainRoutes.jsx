import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Main from "../Layouts/Main";
import SignUp from "../Authentications/SignUp/SignUp";
import SignIn from "../Authentications/SignIn/SignIn";

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
      {
        path: "SignIn",
        element: <SignIn />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Main from "../Layouts/Main";
import SignUp from "../Authentications/SignUp/SignUp";
import SignIn from "../Authentications/SignIn/SignIn";
import HomePage from "../HomePage/HomePage";
import Blogs from "../HomePage/Blogs/Blogs";
import PrivateRoute from "../Private/PrivateRoute";
import AddJob from "../DashBoard/AddJob/AddJob";

export const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "SignUp",
        element: <SignUp />,
      },
      {
        path: "SignIn",
        element: <SignIn />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "add-job",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

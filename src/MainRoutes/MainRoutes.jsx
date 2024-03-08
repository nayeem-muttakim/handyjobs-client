import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";

export const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>,
    errorElement: <ErrorPage />,
  },
]);

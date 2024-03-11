import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "./../assets/loading.json";
import Lottie from "lottie-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Lottie animationData={Loading} />;
  if (user) return children;
  return <Navigate to="/SignIn" state={{ from: location }} replace />;
};

export default PrivateRoute;

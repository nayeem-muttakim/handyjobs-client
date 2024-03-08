import { useRouteError } from "react-router-dom";
import Error from "./assets/error.json";
import Lottie from "lottie-react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Lottie animationData={Error} />
    </div>
  );
}

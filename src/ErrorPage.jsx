import { Link, useRouteError } from "react-router-dom";
import Error from "./assets/error.json";
import Lottie from "lottie-react";
import { Box, Button } from "@mui/material";
import { HomeSharp } from "@mui/icons-material";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box
      display={"grid"}
      justifyContent={"center"}
      alignItems={"center"}
      className="min-h-screen"
      px={2}
    >
      <Lottie animationData={Error} />
      <Link to={"/"}>
        <Button
          sx={{
            color: "#9381ff",
            width: 400,
            display: "flex",
            gap: 2,
            py: 2,
            fontSize: 17,
            mx:"auto"
          }}
          variant="outlined"
          disableElevation
        >
          Home <HomeSharp />
        </Button>
      </Link>
    </Box>
  );
}

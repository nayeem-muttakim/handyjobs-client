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
    >
      <Lottie animationData={Error} />
      <Link to={"/"}>
        <Button
          sx={{
            bgcolor: "#9381ff",
            width: 400,
            display: "flex",
            gap: 2,
            alignItems: "center",
            p: 2,
            fontSize: 17,
          }}
          variant="contained"
          disableElevation
        >
          Home <HomeSharp />
        </Button>
      </Link>
    </Box>
  );
}

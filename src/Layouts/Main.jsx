import { Box } from "@mui/material";
import NavBar from "../HomePage/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Box>
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Main;

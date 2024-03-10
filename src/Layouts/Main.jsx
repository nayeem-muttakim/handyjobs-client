import { Box } from "@mui/material";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <Box>
      <NavBar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Main;

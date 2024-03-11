import { Box } from "@mui/material";
import Banner from "./Banner/Banner";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <Box>
       <Helmet>
        <title>HandyJobs</title>
      </Helmet>
      <Banner />
    </Box>
  );
};

export default HomePage;

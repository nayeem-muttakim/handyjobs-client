import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Select from "react-select";
import useAuth from "../../Hooks/useAuth";

const AddJob = () => {
  const options = [
    { value: "On Site", label: "On Site" },
    { value: "Remote", label: "Remote" },
    { value: "Part-time", label: "Part-time" },
    { value: "Hybrid", label: "Hybrid" },
  ];
  const [selectedOption, setSelectedOption] = useState("");

  const { user } = useAuth();
  return (
    <Box>
      <Helmet>
        <title>HandyJobs | Add a Job</title>
      </Helmet>
      <Paper
        sx={{
          width: "400px",
          color: "white",
          p: 4,
          py: 2,
          my: 2,
          mx: "auto",
          backgroundColor: "#9381ff",
        }}
        elevation={1}
      >
        <Typography
          textAlign={"center"}
          sx={{ fontWeight: "bold" }}
          variant="h5"
        >
          Recent Blogs
        </Typography>
      </Paper>
      <Box>
        <form
          style={{
            maxWidth: 750,
            marginTop: 50,
            margin: "auto",
            display: "grid",
            gap: 10,
          }}
        >
          <TextField name="pet_image" type="file" required variant="outlined" />
          <TextField
            name="job_title"
            label="Job Title"
            type="text"
            required
            variant="outlined"
          />
          <TextField
            name="posted_by"
            label="Posted by"
            defaultValue={user?.displayName}
            type="text"
            required
            variant="outlined"
          />
          <TextField
            name="salary_range"
            type="text"
            required
            label="Salary Range"
            variant="outlined"
          />

          <TextField
            name="applicants_number"
            type="number"
            required
            defaultValue={0}
            label="Applicants Number"
            variant="outlined"
          />
          <TextField name="applicants_number" type="date" required />

          <Grid my={"auto"}>
            <Select
              required
              placeholder="Job Category"
              name="pet_category"
              options={options}
              onChange={setSelectedOption}
              defaultValue={selectedOption}
            />
          </Grid>
          <TextField
            required
            name="short_description"
            placeholder="Short Description"
          />

          <Button
            variant="outlined"
            sx={{
              bgcolor: "#9381ff",
              width: 300,
              mx: "auto",
              color: "white",
              fontSize: { sm: 20 },
              "&:hover": { color: "black" },
            }}
            type="submit"
          >
            Add
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AddJob;

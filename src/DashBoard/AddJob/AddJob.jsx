import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Select from "react-select";
import useAuth from "../../Hooks/useAuth";
import { Label } from "@mui/icons-material";
import moment from "moment";
import { imageUpload } from "../../API/utils";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddJob = () => {
  const options = [
    { value: "On Site", label: "On Site" },
    { value: "Remote", label: "Remote" },
    { value: "Part-time", label: "Part-time" },
    { value: "Hybrid", label: "Hybrid" },
  ];
  const [selectedOption, setSelectedOption] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const handleAdd = async (e) => {
    e.preventDefault();
    const job_title = e.target.job_title.value;
    const posted_by = e.target.posted_by.value;
    const posting_date = moment().format("DD/MM/YYYY,h:mm a");
    const salary_range = e.target.salary_range.value;
    const applicants_number = e.target.applicants_number.value;
    const deadline = e.target.deadline.value;
    const short_description = e.target.short_description.value;
    const job_category = selectedOption;
    const job_banner = e.target.job_banner.files[0];

    try {
      //upload banner
      const bannerData = await imageUpload(job_banner);
      const jobData = {
        job_title,
        banner: bannerData?.url,
        posted_by,
        posting_date,
        salary_range,
        applicants_number,
        deadline,
        short_description,
        job_category,
      };
      axiosSecure
        .post("/jobs", jobData)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("success");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
    console
      .log
      // posting_date
      // job_banner,
      // job_category,
      // job_title,
      // posted_by,
      // salary_range,
      // applicants_number,
      // deadline,
      // short_description
      ();
    // const toasted = toast.loading("Signing Up");
  };
  return (
    <Box p={5} minHeight={790}>
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
          onSubmit={handleAdd}
          style={{
            maxWidth: 750,
            marginTop: 100,
            margin: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "repeat(1,1fr)", md: "repeat(3,1fr)" },
            gap: 30,
            rowGap: 30,
          }}
        >
          <TextField
            name="job_banner"
            type="file"
            required
            variant="outlined"
          />
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

          <TextField name="deadline" label="Deadline" type="date" required />

          <Grid my={"auto"}>
            <Select
              required
              placeholder="Job Category"
              name="job_category"
              options={options}
              onChange={setSelectedOption}
              defaultValue={selectedOption}
            />
          </Grid>
          <TextField
            required
            name="short_description"
            multiline
            label="Short Description"
            sx={{ gridColumn: "span 2" }}
          />

          <Button
            variant="outlined"
            sx={{
              gridColumn: "span 3",
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

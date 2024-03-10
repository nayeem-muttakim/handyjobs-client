import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { imageUpload } from "../../API/utils";

const SignUp = () => {
  const { signUp, updateInfo } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const image = e.target.image.files[0];
    const toasted = toast.loading("Signing Up");

    try {
      // upload image
      const imageData = await imageUpload(image);

      // create user
      const result = await signUp(email, pass);
      // user name and image
      await updateInfo(name, imageData?.url);
      const userInfo = {
        name: name,
        email: email,
        image: imageData?.data?.display_url,
        role: "user",
      };
      // await axiosPublic.post("/users", userInfo);

      toast.success("Signed Up", { id: toasted });

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSignUp}>
        <Grid sx={{ display: "grid", gap: 5, p: 5 }}>
          <TextField label="Full Name" name="name" type="text" required />

          <TextField name="image" type="file" required />
          <TextField label="Email" name="email" type="email" required />

          <TextField
            label="Password"
            name="password"
            type="password"
            required
          />

          <Button
            variant="contained"
            type="submit"
            sx={{
              // backgroundColor: "#ccd5ae",
              // color: "black",
              px: { xs: 10, sm: 19 },
              py: 1,
              fontSize: { sx: 10, md: 18 },
              fontWeight: 700,
            }}
          >
            Create account
          </Button>
          <Typography>
            Already have an account?{" "}
            <Link to="/login">
              <Typography variant="span" sx={{ color: "#d4a373" }}>
                Login
              </Typography>
            </Link>
          </Typography>
        </Grid>
      </form>
    </Box>
  );
};

export default SignUp;

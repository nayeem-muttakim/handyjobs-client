import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { imageUpload } from "../../API/utils";
import signuppic from "/signup.svg";
import SocialSignIn from "../Social/SocialSignIn";
import { Helmet } from "react-helmet-async";
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

      toast.success("Signed Up", { id: toasted });

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Helmet>
        <title>HandyJobs | Sign up</title>
      </Helmet>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={800}
        flexDirection={"row-reverse"}
        px={1}
        gap={5}
      >
        <Box display={{ xs: "none", md: "block" }}>
          <img src={signuppic} alt="signIn" width={600} />
        </Box>
        <Grid border={1} color={"#9381ff"}>
          <Typography pl={5} pt={2} color={"#9381ff"} variant="h4">
            Sign Up
          </Typography>
          <form onSubmit={handleSignUp}>
            <Grid sx={{ display: "grid", gap: 2.5, p: 5 }}>
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
                  backgroundColor: "#9381ff",

                  px: { xs: 10, sm: 19 },
                  py: 1,
                  fontSize: { sx: 10, md: 18 },
                  fontWeight: 700,
                }}
              >
                Create account
              </Button>
              <Typography color={"black"}>
                Already Signed up?{" "}
                <Link to="/SignIn">
                  <Typography variant="span" color={"#9381ff"}>
                    Sign in
                  </Typography>
                </Link>
              </Typography>
              <Divider orientation="horiontal" variant="middle">
                Or
              </Divider>
              <SocialSignIn />
            </Grid>
          </form>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUp;

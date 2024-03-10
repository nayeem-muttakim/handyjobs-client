import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import signInPic from "/signin.svg";
import SocialSignIn from "../Social/SocialSignIn";

const SignIn = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const to = location?.state?.from?.pathname || "/";
  const handleSignIn = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.password.value;
    const toasted = toast.loading("Signing In");
    signIn(email, pass)
      .then((res) => {
        toast.success("Signed In", { id: toasted });
        navigate(to);
      })
      .catch((err) => {
        toast.error("Invalid Email or Password", { id: toasted });
      });
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={800}
      px={1}
      gap={5}
    >
      <Box display={{ xs: "none", md: "block" }}>
        <img src={signInPic} alt="signIn" width={700} />
      </Box>
      <Box border={1} color={"#9381ff"}>
        <Typography pl={5} pt={2} color={"#9381ff"} variant="h4">
          Sign Up
        </Typography>
        <form onSubmit={handleSignIn}>
          <Grid sx={{ display: "grid", gap: 5, p: 5 }}>
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
                bgcolor: "#9381ff",
                px: { xs: 10, sm: 19 },
                py: 1,
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              Sign in
            </Button>
            <Typography color={"black"}>
              Haven't register?{" "}
              <Link to="/SignUp">
                <Typography variant="span" color={"#9381ff"}>
                  Signup now
                </Typography>
              </Link>
            </Typography>
            <Divider sx={{ mt: 2 }} orientation="horiontal" variant="middle">
              Or
            </Divider>
            <SocialSignIn />
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default SignIn;

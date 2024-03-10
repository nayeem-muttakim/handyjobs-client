import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
    <Box>
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
              backgroundColor: "#ccd5ae",
              color: "black",
              px: { xs: 10, sm: 19 },
              py: 1,
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Sign in
          </Button>
          <Typography>
            Don't have an account?{" "}
            <Link to="/register">
              <Typography variant="span" sx={{ color: "#d4a373" }}>
                Create one
              </Typography>
            </Link>
          </Typography>
        </Grid>
      </form>
    </Box>
  );
};

export default SignIn;

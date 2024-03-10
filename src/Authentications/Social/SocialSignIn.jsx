import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Avatar, Box, Button, Typography } from "@mui/material";
import toast from "react-hot-toast";
import ggLogo from "/google.png";

const SocialSignIn = () => {
  const { googleSignIn } = useAuth();

  const location = useLocation();

  const navigate = useNavigate();

  const to = location?.state?.from?.pathname || "/";
  const handleGoogle = async () => {
    const toasted = toast.loading("Signing In");

    googleSignIn()
      .then((res) => {
        toast.success("Signed In", { id: toasted });
        navigate(to);
      })
      .catch((err) => {
        toast.error("Invalid User", { id: toasted });
      });
  };
  return (
    <Box>
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 2, sm: 12 },
          border: 1,
          mx: { xs: 2, sm: 12 },
          px: 3,
          py: 1,
          borderRadius: 12,
          color: "#9381ff",
        }}
        onClick={handleGoogle}
      >
        <Avatar src={ggLogo} />
        <Typography variant="body1">Continue With Google</Typography>
      </Button>
    </Box>
  );
};

export default SocialSignIn;

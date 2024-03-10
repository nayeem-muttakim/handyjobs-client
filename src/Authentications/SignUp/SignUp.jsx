import { Box } from "@mui/material";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { signUp, updateInfo } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSignUp=async ()=>{

  }

  return <Box></Box>;
};

export default SignUp;

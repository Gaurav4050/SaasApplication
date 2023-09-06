import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Login from "../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [config, setConfig] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("username")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async () => {
    console.log(config);
    try {
      await axios.post(
        "https://backend-saas-3jc1.onrender.com/auth/login",
        config
      );

      toast.success("Succesfuly Sign Up!", {
        position: "top-center",
        theme: "dark",
      });

      localStorage.setItem("username", config.username);
      navigate("/");
    } catch (error) {
      toast.error("Wrong Credentials!", {
        position: "top-center",
        theme: "dark",
      });
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "35px 50px 15px 50px",
          //   margin: "0 60px",
          border: "2px solid #5288de",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={Login}
            alt=""
            style={{
              height: "150px",
              width: "150px",
              objectFit: "cover",
              //   borderRadius: "50%",
              //   border: "2px solid #5288de",
              textAlign: "center",
            }}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            value={config.username}
            label="Enter Usename"
            name="username"
            variant="standard"
            InputLabelProps={{
              style: { color: "#707070" }, // This sets the label color
            }}
            InputProps={{
              style: { color: "white" }, // This sets the input text color to white
            }}
            fullWidth
            onChange={(e) =>
              setConfig((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <br />
          <TextField
            value={config.password}
            id="standard-basic"
            label="Enter Password"
            variant="standard"
            type="password"
            name="password"
            InputProps={{
              style: { color: "white" }, // This sets the input text color to white
            }}
            InputLabelProps={{
              style: { color: "#707070" }, // This sets the label color
            }}
            style={{ margin: "15px 0" }}
            fullWidth
            onChange={(e) =>
              setConfig((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />

          <div>
            <Button
              variant="outlined"
              fullWidth
              style={{ marginTop: "20px", marginBottom: "25px" }}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </div>
          <label style={{ color: "#ffffff" }}>
            dont't have an account?{" "}
            <Link style={{ color: "#5288de" }} to="/signup">
              sign up
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

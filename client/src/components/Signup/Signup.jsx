import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { toast } from "react-toastify";
const Signup = () => {
  const [config, setConfig] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://backend-saas-3jc1.onrender.com/auth/register",
        config
      );
      console.log(response.data);

      toast.success("User Added Succesfuly!", {
        position: "top-center",

        theme: "dark",
      });
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.status);
        console.error("Error Data:", error.response.data);
      } else if (error.request) {
        console.error("Request Error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
      toast.error("User Already Exist!", {
        position: "top-center",

        theme: "dark",
      });
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div className="form-group">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "start",
              }}
            >
              <label
                htmlFor="username"
                style={{
                  margin: "15px 9px",
                  color: "#ffffff",
                  fontSize: "20px",
                }}
              >
                Username :
              </label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "start",
                margin: "15px",
              }}
            >
              <input
                type="text"
                id="username"
                name="username"
                required
                value={config.username}
                style={styles.input}
                onChange={(e) =>
                  setConfig((pv) => ({
                    ...pv,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "start",
              }}
            >
              <label
                htmlFor="email"
                style={{
                  margin: "15px",
                  color: "#ffffff",
                  fontSize: "20px",
                  marginRight: "35px",
                }}
              >
                Email :
              </label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "start",
                margin: "15px",
                marginLeft: "18px",
              }}
            >
              <input
                style={styles.input}
                type="email"
                id="email"
                value={config.email}
                name="email"
                onChange={(e) =>
                  setConfig((pv) => ({
                    ...pv,
                    [e.target.name]: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "start",
              }}
            >
              <label
                htmlFor="password"
                style={{ margin: "15px", color: "#ffffff", fontSize: "20px" }}
              >
                Password:
              </label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "start",
                margin: "15px",
                marginLeft: "16px",
              }}
            >
              <input
                style={styles.input}
                type="password"
                id="password"
                value={config.password}
                name="password"
                onChange={(e) =>
                  setConfig((pv) => ({
                    ...pv,
                    [e.target.name]: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>
        </div>

        <button type="submit" className="button-89">
          Sign Up For Free Trial
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    // maxWidth: "500px",
    margin: "25px auto",
    // margin: "50px",
    padding: "10px 15px",
    // backgroundColor: "#f5f5f5",
    borderRadius: "5px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    border: "1px solid white",
  },

  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #5288de",
    marginBottom: "10px",
    outline: "none",
    background: "transparent",
    borderColor: "#5288de",
    color: "#ffffff",
  },
  inputFocus: {
    background: "transparent",
    borderColor: "#5288de",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#5288de",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    marginTop: "15px",
    width: "320px",
  },
};

export default Signup;

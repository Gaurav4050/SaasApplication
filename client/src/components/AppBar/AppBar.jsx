import React, { useState } from "react";
import { FaRocket } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./AppBar.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const AppBar = () => {
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState(false);
  console.log(flag);
  return (
    <>
      <div className="container" style={styles.container}>
        <div>
          <div className="navbar" style={styles.navbar}>
            <FaRocket style={{ marginTop: "5px", color: "#fff" }} />
            Ascent
          </div>
        </div>

        <div
          className="right-nav buttonContainer"
          style={styles.buttonContainer}
        >
          {!localStorage.getItem("username") ? (
            <>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <div className="button" style={styles.button}>
                  Sign Up
                </div>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div className="button" style={styles.button}>
                  Login
                </div>
              </Link>
            </>
          ) : (
            <>
              {
                <Avatar sx={{ bgcolor: "#707070" }}>
                  {localStorage.getItem("username")[0]}
                </Avatar>
              }
              <div
                className="button"
                style={styles.button}
                onClick={() => {
                  localStorage.removeItem("username");
                  setFlag(true);
                }}
              >
                Logout
              </div>
            </>
          )}
        </div>

        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {!open ? <MenuIcon /> : <CloseIcon />}
        </div>
      </div>

      {open && (
        <div className="right-screen">
          <div className="right-screen-button">Sign in</div>
          <hr style={{ borderTop: "1px dashed #5288de", margin: "5px 0px" }} />
          <div className="right-screen-button">Sign up</div>
          <hr style={{ borderTop: "1px dashed #5288de", margin: "5px 0px" }} />
          <div className="right-screen-button">Logout</div>
          <hr style={{ borderTop: "1px dashed #5288de", margin: "5px 0px" }} />
        </div>
      )}
    </>
  );
};

const styles = {};
export default AppBar;

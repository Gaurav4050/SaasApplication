import React from "react";
import Complete from "../../assets/complete.svg";
import Signup from "../Signup/Signup.jsx";
import "./Landing.css";
const Landing = () => {
  return (
    <div style={{ display: "flex" }} className="landing">
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 30px",
        }}
      >
        <img src={Complete} alt="" className="landing-image" />
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <Signup />
      </div>
    </div>
  );
};

export default Landing;

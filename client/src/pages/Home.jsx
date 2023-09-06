import React from "react";
import NavBar from "../components/AppBar/AppBar.jsx";
import Landing from "../components/Landing/Landing.jsx";
import Features from "../components/Features/Features.jsx";
import Items from "../components/Items/Items.jsx";
import Review from "../components/Review/Review.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  return (
    <>
      <NavBar />
      <Landing />
      <hr style={{ borderTop: "1px dashed #5288de", margin: "5px 0px" }} />
      <Features />
      <hr style={{ borderTop: "1px dashed #5288de", margin: "5px 0px" }} />
      <Items />
      <hr style={{ borderTop: "1px dashed #5288de", margin: "5px 0px" }} />
      <Review />
      <Footer />
    </>
  );
};

export default Home;

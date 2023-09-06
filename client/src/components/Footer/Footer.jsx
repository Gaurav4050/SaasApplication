import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons from react-icons
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p style={{ fontSize: "20px" }}>&copy; 2023 Your Website Name</p>
        <div className="social-icons">
          <a href="/" className="icon">
            <FaFacebook />
          </a>
          <a href="/" className="icon">
            <FaTwitter />
          </a>
          <a href="/" className="icon">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

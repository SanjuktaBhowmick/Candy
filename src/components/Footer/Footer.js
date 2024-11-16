import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Candy Website. All Rights Reserved.
        </p>
        {/* <ul className="footer-links">
          <li>
            <a href="/about" className="footer-link">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="footer-link">
              Contact
            </a>
          </li>
          <li>
            <a href="/privacy" className="footer-link">
              Privacy Policy
            </a>
          </li>
        </ul> */}
      </div>
    </footer>
  );
};

export default Footer;

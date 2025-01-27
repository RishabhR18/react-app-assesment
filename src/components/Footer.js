import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Card Management System. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

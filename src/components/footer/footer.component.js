import React from "react";
import "./footer.styles.css";

export const Footer = () => {
  return (
    <p className="footer-text">
      Created by{" "}
      <a
        href="https://www.linkedin.com/in/alejandrrhernandez/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Alejandro Exequiel Hernández Lara
      </a>
      {" - "}
      <a
        href="https://github.com/Alejandrehl/monster-rolodex"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Repository
      </a>
    </p>
  );
};

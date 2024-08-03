import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer bg-dark py-3 mt-auto">
      <div class="container text-center">
        <span class=" text-white">
          Made by &copy; Sandeep Kumar Gupta{" "}
          <a href="https://github.com/coder-3022">
            <FaGithub />
          </a>{" "}
          <a href="https://www.linkedin.com/in/sandeep-kumar-gupta-983757250/">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

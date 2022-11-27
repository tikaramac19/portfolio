import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsTwitter,BsGithub } from "react-icons/bs";
import {FaLinkedin} from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
      <a href="" className="footer-logo">
        Tikaram Ac
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="social-footer">
        <a href="https://www.facebook.com/tikaram.acharya.7927/" target = "_blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/tikaramac/" target = "_blank">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/tikaramac19" target = "_blank">
          <BsTwitter />
        </a>
        <a href="https://www.linkedin.com/in/tikaram-ac-91ab471b4/" target = "_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/tikaramac19/" target='_blank'><BsGithub /></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Tikaram Ac. All rights reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;

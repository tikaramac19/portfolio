import React from "react";
import "./Header.css";
import CTA from "./CTA";
import TikaramAc from "../../assets/wallpaper.png"
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <>
      <header>
        <div className="container header-container">
          <h5>Hello There !!</h5>
          <h5>I'm</h5>
          <h1>Tikaram Acharya</h1>
          <h5 className="text-light">FrontEnd Developer</h5>
          {/* download cv btn and messege btn  */}
          <CTA />
          {/* soclails icons */}
          <HeaderSocials />
          <div className="me">
            <img src={TikaramAc} alt="me" />
          </div>
          <a href="#contact" className="scroll-down">Scroll Down</a>
        </div>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import "./About.css";
import Me from "../../assets/tikuprofile.jpg";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { RiFolder2Line } from "react-icons/ri";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <img src={Me} alt="iam" />
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <BsAward className="icons" />
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>

            <article className="about-card">
              <FiUsers className="icons" />
              <h5>Clints</h5>
              <small>10+ clients</small>
            </article>

            <article className="about-card">
              <RiFolder2Line className="icons" />
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
          </div>
          <p>
            Tikaram Acharya is a young talent from Surkhet. He is currently
            pursuing his bachelor’s degree in computer science and information
            technology from Academia International College. He loves to describe
            himself as a Frontend developer, and have a great passion for it. He
            loves to have fun and has a good sense of humor and likes to roast
            pretty much, and also has a great love, dedication for sports. This
            guy wants to explore new things and learn as much as possible.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

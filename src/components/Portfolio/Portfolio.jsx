import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/facebook.PNG";
import img2 from "../../assets/todo.PNG";
import img3 from "../../assets/tour-cards.PNG";
import img4 from "../../assets/reviews.PNG";
import img5 from "../../assets/birthday.PNG";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="item-image">
            <img src={img1} alt="facebook" />
          </div>
          <h3>Simple Facebook Login Page</h3>
          <div className="portfolio-cta">
            <a
              href="https://github.com/tikaramac19/"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="item-image">
            <img src={img2} alt="facebook" />
          </div>
          <h3>ToDo App using Js</h3>
          <div className="portfolio-cta">
            <a
              href="https://github.com/tikaramac19/Complete-Todo"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="item-image">
            <img src={img3} alt="facebook" />
          </div>
          <h3>Tour Cards ReactJs</h3>
          <div className="portfolio-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="item-image">
            <img src={img4} alt="facebook" />
          </div>
          <h3>Social Media App</h3>
          <div className="portfolio-cta">
            <a
              href="https://github.com/tikaramac19/SocialMedia"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="item-image">
            <img src={img5} alt="facebook" />
          </div>
          <h3>Calculator using ReactJs</h3>
          <div className="portfolio-cta">
            <a
              href="https://github.com/tikaramac19/Calculator_parth"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

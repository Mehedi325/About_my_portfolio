import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/me2.png'




const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <h5>Get to know</h5>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Md.Mehedi Hasan Masum" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            With two years of experience in Front-End web development using React.js and one year as an SEO expert,
            I excel in creating dynamic, responsive, and user-friendly web applications. 
            My skills in HTML, CSS, JavaScript, and state management libraries like Redux ensure robust and scalable solutions. 
            As an SEO expert, I specialize in keyword research, on-page and off-page optimization, and performance tracking, 
            ensuring high visibility and user engagement. 
            I integrate these skills to deliver exceptional, optimized web experiences.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;

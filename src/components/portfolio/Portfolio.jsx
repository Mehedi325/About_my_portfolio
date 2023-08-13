import "./portfolio.css";

import IMG1 from "../../assets/acdemic.png";
import IMG2 from "../../assets/e-commerce.png";
import IMG3 from "../../assets/portfolio.png";
import IMG4 from "../../assets/business.png";
import IMG5 from "../../assets/Portfolio2.png";
import IMG6 from "../../assets/e-school.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Educational Website",
      img: IMG1,
      description:"An educational website is a huge interactive present various information people.",
      technologies: "Html | Tailwind CSS | Javascript | React Js",
      link: "https://education-website-fawn.vercel.app/",
      github: "https://github.com/Mehedi325/Education_Website",
    },
    {
      id: 2,
      title: "E-commerce Shop",
      img: IMG2,
      description:"This is a E-Commerce website buy more product",
      technologies: "React Js | Tailwind CSS",
      link: "https://e-commerce-website-shopping.vercel.app/",
      github: "https://github.com/Mehedi325/E-commerce-website",
    },
    {
      id: 3,
      title: "Portfolio Website",
      img: IMG3,
      description: "This site is a Personal Portfolio.",
      technologies: "React Js | JavaScript | Tailwind CSS ",
      link: "https://github.com/Mehedi325/Portfolio_website",
      github: "https://github.com/Mehedi325/Portfolio_website",
    },
    {
      id: 4,
      title: "Business Strategy Website",
      img: IMG4,
      description:
        "A dedicated, standalone web page built for Promote your Business Strategy",
      technologies: "Html | CSS | JavaScript | React Js",
      link: "https://react-project-business.vercel.app/",
      github: "https://github.com/Mehedi325/React-project-Business",
    },
    {
      id: 5,
      title: "About Myself Portfolio Website",
      img: IMG5,
      description:
        "This Website is about me.",
      technologies: "Html | CSS | JavaScript | React Js",
      link: "https://about-my-portfolio.vercel.app/",
      github: "https://github.com/Mehedi325/About_my_portfolio",
    },
    {
      id: 6,
      title: "E-School Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Html | CSS | Javascript",
      link: "https://e-school-project.vercel.app/",
      github: "https://github.com/Mehedi325/E-school-project",
    },
  ];

  return (
    <section id="portfolio">
      
      <h2>Portfolio</h2>
      <h5>My Recent Work</h5>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

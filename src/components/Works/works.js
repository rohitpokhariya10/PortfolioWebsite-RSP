import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Forcastify from '../../assets/portfolio-2.png';
import ResumeGenerator from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const projects = [
  {
    title: "Project 1",
    img: Portfolio1,
    github: "https://github.com/rohitpokhariya10/PortfolioWebsite-RSP"
  },
  {
    title: "Project 2",
    img: ResumeGenerator,
    github: "https://github.com/rohitpokhariya10/resume-generator"
  },
  {
    title: "Project 3",
    img: Forcastify,
    github: "https://github.com/rohitpokhariya10/Forcastify"
  },
 
];

const Works = () => {
  return (
    <section id='works'>
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.
        I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
      </span>

      <div className="projectGrid">
        {projects.map((project, index) => (
          <div className="projectCard" key={index}>
            <img src={project.img} alt={project.title} className="projectImg" />
            <h3>{project.title}</h3>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button className="githubBtn">View Code</button>
            </a>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Works;

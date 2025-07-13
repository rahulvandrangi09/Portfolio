import React from "react";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h1>🚀 My Projects</h1>
      <div className="projects-container">
        {[
          {
            title: "Agronet",
            image: "./Agr0net.png",
            description:
              "Web tool that helps farmers identify plant diseases and get real-time help.",
            tech: "HTML, CSS, JavaScript, Firebase",
            link: "https://github.com/rahulvandrangi09/AgroNet",
          },
          {
            title: "Tourism",
            image: "./Tourism.png",
            description:
              "Responsive travel guide web app built with modern frontend tech.",
            tech: "HTML, CSS, JavaScript, React, Firebase",
            link: "https://github.com/rahulvandrangi09/React-TourismWeb",
          },
          {
            title: "Weather App",
            image: "./Weather.png",
            description:
              "Check real-time weather for any city in the world with a simple UI.",
            tech: "HTML, CSS, JavaScript, Firebase",
            link: "https://github.com/rahulvandrangi09/WeatherApp",
          },
        ].map((project, i) => (
          <div className="project-card" key={i}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p className="tech">🛠️ {project.tech}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

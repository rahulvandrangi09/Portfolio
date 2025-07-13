import React, { useEffect, useRef, useState } from "react";

const Skills = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <div
      className={`skills-container ${isVisible ? "fade-in" : "fade-out"}`}
      id="skills"
      ref={skillsRef}
    >
      <h1 className="skills-heading">Skills</h1>

      <div className="skills-flex">
        <div className="skills-icons">
          {["html.png", "css-3.png", "js.png", "React.png", "nodejs.png", "mongodb.svg", "Firebase.png"].map(
            (img, i) => (
              <img
                key={i}
                src={`./${img}`}
                alt={img.split(".")[0]}
                style={{ animationDelay: `${i * 0.15}s` }}
                className={`skill-icon ${isVisible ? "icon-animate" : ""} ${img === "nodejs.png" ? "nodejs-bg" : ""}`}
              />
            )
          )}
        </div>

        <div className={`skills-content ${isVisible ? "slide-in" : "slide-out"}`}>
          <h3>🧠 <span>Core Skills:</span></h3>
          <ul>
            <li>Frontend Development (HTML, CSS, JS, React)</li>
            <li>Backend Development (Node.js,Express.js, MongoDB, Firebase)</li>
          </ul>

          <h3>🔗 <span>Tools & Platforms:</span></h3>
          <ul>
            <li>Postman</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

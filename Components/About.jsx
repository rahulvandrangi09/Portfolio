import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div
        id="about"
        ref={aboutRef}
        className={`about-section ${isVisible ? "fade-in" : "fade-out"}`}
      >
        <div id="innerAbout">
          <div id="leftAbout">
            <h1>About Me</h1>
            <h3>
              I'm a self-taught web developer with a strong interest in frontend
              technologies. I enjoy creating clean, accessible, and responsive
              websites that solve real problems. I'm currently expanding my
              skills in Node.js and MongoDB to dive into full-stack development.
              My goal is to build impactful web experiences and grow into a
              professional developer.
            </h3>
          </div>
          <div id="rightAbout">
            <img src="./Profile.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

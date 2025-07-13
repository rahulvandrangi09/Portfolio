import React, { useEffect, useState } from "react";

const Hero = () => {
  const roles = [
    "Frontend Developer",
    "Web Developer",
    "UI/UX Designer",
    "Full Stack Developer",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
  const interval = setInterval(() => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % roles.length);
      setFade(true);
    }, 300);
  }, 2500);

  return () => clearInterval(interval);
}, []);

  return (
    <div>
      <div className="hero" id="hero">
        <div className="innerHero">
          <div id="heroText">
            <h3>
              <span style={{ fontSize: "23px" }}>Hi, I'm</span> <br />{" "}
              <span style={{ fontSize: "50px" }}>Rahul Vandrangi</span> <br /> A{" "}
              <span className={`role-text ${fade ? "fade-in" : "fade-out"}`}>
                {roles[index]}
              </span>
            </h3>
          </div>
          <div id="imagesHero">
            <a href="https://github.com/rahulvandrangi09" target="_blank">
              <img src="./github.png" alt="" />
            </a>
            <a href="mailto:rahulvandrangi1k@gmail.com" target="_blank">
              <img src="./email.png" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/vandrangi-rahul-872028284/"
              target="_blank"
            >
              <img src="./linkedin.png" alt="" />
            </a>
            <a
              href="https://codeforces.com/profile/rahulvandrangi1k"
              target="_blank"
            >
              <img src="./codeforces.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

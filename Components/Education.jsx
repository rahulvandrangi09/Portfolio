import React, { useEffect, useRef, useState } from "react";

const Education = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div className={`container ${inView ? "fade-in" : "fade-out"}`} id="education">
        <div className="header">
          🎓<span>Education</span>
        </div>

        <div className="timeline">
          <div className={`entry ${inView ? "slide-in" : "slide-out"}`}>
            <h2>Vignan’s Institute of Information Technology</h2>
            <p>B. Tech</p>
            <p>Computer Science and Engineering</p>
          </div>

          <div className={`entry ${inView ? "slide-in" : "slide-out"}`}>
            <h2>Sri Chaitanya Junior College</h2>
            <p>M.P.C</p>
            <p>Kurmannapalem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

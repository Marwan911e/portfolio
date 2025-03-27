import React, { useState, useEffect } from 'react';
import './css/portfolio.css';
import home from "./assets/home.gif";
import abme from "./assets/aboutme.png";
import me from "./assets/me.png";
import resume1 from "./assets/resume1.png";
import resume2 from "./assets/resume2.png";
import smfw from "./assets/smfw.png";

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check system preference on initial load
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(prefersDarkMode.matches ? 'dark' : 'light');

    // Listen for changes in system theme
    const handleThemeChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    prefersDarkMode.addEventListener('change', handleThemeChange);
    return () => prefersDarkMode.removeEventListener('change', handleThemeChange);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`portfolio-container ${theme}-theme`}>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      <section className="section intro">
        <h1>Marwan Elsayed</h1>
        <br />
        <h3>Crafting Digital Experiences with Precision and Elegance</h3>
      </section>

      <section className="section about">
        <div className="text">
          <h2>About Me</h2>
          <h3>Excellence is not an act, but a habit.</h3>
          <p>
            I'm Marwan Elsayed, a software engineer with a passion for
            building elegant, high-performance web applications. With
            expertise in full-stack development and a focus on intuitive
            user experiences, I turn ideas into impactful digital solutions.
            My journey is driven by precision, creativity, and a relentless
            pursuit of excellence.
          </p>
        </div>
        <div className="images">
          <img src={me} alt="Me" />
          <img src={abme} alt="Me" />
        </div>
      </section>

      <section className="section portfolio">
        <img src={smfw} alt="Portfolio Work" />
        <div className="text">
          <h2>A Selection of My Finest Work</h2>
          <p>
            <strong>Task Management System</strong> An elegant and intuitive solution for
            organizing tasks with effortless precision. Tech Stack: React,
            Redux, Node.js, MongoDB live demo: Collabtask.me
          </p>
          <p>
            E-Commerce Platform A sophisticated online shopping experience
            with smooth navigation, secure payments, and personalized
            recommendations. Tech Stack: React, Redux, Node.js, Express,
            MongoDB, Stripe API live demo: commshop.com
          </p>
          <p>
            Social Media Dashboard An interactive and dynamic platform for
            monitoring user engagement, analyzing trends, and visualizing
            social metrics in real time. Tech Stack: React, Chart.js,
            Node.js, Express, WebSockets
          </p>
        </div>
      </section>

      <section className="section resume resume-page-1">
        <div className="text">
          <h2>Resume</h2>
          <h3>
            Alexandria, Egypt | +201211763853 | marwan.04e@gmail.com |
            LinkedIn{" "}
          </h3>
          <p>
            Objective Dynamic Enthusiastic computer science student with
            strong proficiency in the MERN stack and a solid foundation in
            software engineering principles. Demonstrated problem-solving
            skills through the completion of 500+ algorithm challenges on
            various platforms. Committed to developing user-centric
            applications and continuously enhancing technical skills to
            contribute effectively to innovative projects.{" "}
          </p>
          <p>
            Education Bachelor of Science in Computer Science CGPA: 3.3 Very
            good Expected Graduation: Spring 2026 Arab Academy for Science
            and Technology, Alexandria, Egypt{" "}
          </p>
          <p>
            Experience MERN Stack Developer | Digital Egypt Pioneers
            Initiative (DEPI), Alexandria, EG Mar 2024 - Present •
            Collaborate in a team to deliver full-stack web solutions
            enhancing user engagement through responsive interfaces and
            scalable back-end systems. • Achieved a 25% reduction in load
            times across applications, improving overall user experience. IT
            Team Volunteer | IEEE AAST Student Branch, Alexandria, EG Oct
            2023 - Present • Contributed to the development and maintenance
            of branch websites as part of the IT committee. • Collaborated
            Web Development committee, gaining experience with front-end and
            back-end frameworks, version control, and UI/UX design. Team
            Leader | Competitive Programming Club AAST, Alexandria, EG Oct
            2022 - Present • Founded the Byte Bandits team, achieving top
            rankings in ECPC qualifications. • Trained team members in
            algorithms and data structures programming contests.{" "}
          </p>
        </div>
        <img src={resume1} alt="Resume" />
      </section>

      <section className="section resume resume-page-2">
        <img src={resume2} alt="Resume" />
        <div className="text">
          <p>
            Skills Programming Languages: Java, C, C++, Python, JavaScript
            Web Technologies: HTML, CSS, React, Node.js, Express.js Database
            Management: MongoDB, MySQL Development Tools: Git, GitHub
            Additional Skills: UI/UX Design, Version Control, Problem
            Solving{" "}
          </p>
          <p>
            Coursework Data Structures and Algorithms, Software Engineering,
            Object-Oriented Programming, Web Programming, Database Systems,
            Systems Programming, Digital Logic Design, Artificial I
          </p>
          <p>
            Projects Task Management System Technologies: MERN Stack
            (MongoDB, Express.js, React, Node.js) • Developed a full-stack
            task management app with user authentication and real-time
            updates, utilizing RESTful APIs for efficient front-end and
            back-end integration.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
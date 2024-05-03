import React from "react";

const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I'm a Software Developer and Content Creator. I'm passionate about
        sharing knowledge, documentation, web engineering, and others. I'm
        deeply committed to fostering inclusive and collaborative environments
        within the tech community.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Skills and Expertise</h2>
            <p>
              I've skills in various programming languages, including
              JavaScript, Python, and Java. I'm proficient in front-end
              technologies such as HTML5, CSS3, and React.js. I'm familiar with
              version control systems like Git and have a strong understanding
              of software development principles and best practices.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <div className="skillBarText">
            <h2>Career Goals</h2>
            <p>
              My career goal is to become a skilled and versatile full-stack
              developer. I aspire to work on innovative projects that challenge
              me to continuously learn and grow. I'm passionate about leveraging
              technology to solve real-world problems and create impactful
              solutions. In the long term, I aim to contribute to cutting-edge
              software development projects that make a positive difference in
              people's lives and industries.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <div className="skillBarText">
            <h2>Values and Philosophy</h2>
            <p>
              As a software developer, I believe in the power of collaboration,
              continuous learning, and integrity. I value teamwork and believe
              that diverse perspectives lead to better outcomes. Integrity is at
              the core of everything I do, and I strive to uphold ethical
              standards and transparency in my work. I believe in building trust
              and fostering positive relationships with colleagues, clients, and
              stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;

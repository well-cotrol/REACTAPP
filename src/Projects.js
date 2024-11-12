import React from 'react';

function Projects() {
  return (
    <div className="Projects">
      <h2>My Projects</h2>
      <ul>
        <li>
          <a href="https://github.com/well-cotrol/wellcome/tree/main/web%20site%20portfolio" target="_blank" rel="noopener noreferrer">
            Personal Portfolio Website
          </a>
          <p>Built using React, showcasing my skills and projects.</p>
        </li>
        <li>
          <a href="https://github.com/well-cotrol" target="_blank" rel="noopener noreferrer">
            To-Do List App
          </a>
          <p>A simple to-do list app using React and local storage.</p>
        </li>
        <li>
          <a href="https://github.com/well-cotrol" target="_blank" rel="noopener noreferrer">
            Landing Page
          </a>
          <p>A landing page for a fictional company, built with HTML5, CSS3, and JavaScript.</p>
        </li>
      </ul>
    </div>
  );
}

export default Projects;

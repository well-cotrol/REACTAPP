import React from 'react';
import './App.css';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wellcome Khoza - Front-End Developer</h1>
        <p>Welcome to my portfolio! Here are my skills and projects.</p>
      </header>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer>
        <p>© 2024 Wellcome Khoza</p>
      </footer>
    </div>
  );
}

export default App;

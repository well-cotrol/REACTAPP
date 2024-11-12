import React, { useState, useEffect } from 'react';

function Skills() {
  const [visibleSkill, setVisibleSkill] = useState('');
  const skills = [
    "HTML5, CSS3, JavaScript (ES6+)",
    "React, Redux",
    "Bootstrap, Tailwind CSS",
    "Version Control: Git, GitHub",
    "Responsive Web Design",
    "API Integration (RESTful APIs)",
    "Basic knowledge of UI/UX Design"
  ];

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < skills.length) {
        setVisibleSkill(skills[index]);
        index += 1;
      } else {
        clearInterval(intervalId); // Stop when all skills have been shown
      }
    }, 2000); // Delay of 2 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [skills]);

  return (
    <div className="Skills">
      <h2>My Skills</h2>
      <ul>
        <li>{visibleSkill}</li>
      </ul>
    </div>
  );
}

export default Skills;

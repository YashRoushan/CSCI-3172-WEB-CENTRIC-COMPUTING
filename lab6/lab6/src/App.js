import React, { useState } from 'react';
import './App.css';

function App() {

  const [clickCount, setClickCount] = useState(0);

  function countClicks() {
    setClickCount(clickCount + 1);
  }


  return (
    <div className="App">
      <div className="portfolio">
        <h1>Welcome to my Portfolio Page!</h1>
        <h1>Yash Roushan</h1>
        <div className="links">
          <a href="#summary">Summary</a>
          <a href="#education">Education</a>
          <a href="#Experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#technicalSkills">Technical Skills</a>
          <a href="#game">Game</a>
        </div>
        <div id="summary" className="summary">
          <h3>Summary</h3>
          <p>I am a Highly motivated Computer Science Undergraduate at Dalhousie University, with a strong focus on software development and adept analytical skills. Experienced in optimizing UI/UX design, streamlining database management. Proficient in the <a href="https://www.udemy.com/certificate/UC-cb82e4e4-4b90-45b0-8374-4b25d8f5d7bd/">MERN Stack</a>. Recognized for exceptional problem-solving in customer service roles. Actively seeking internship opportunities to apply and expand skills in a professional setting.</p>
        </div>
        <div id="education" className="education">
          <h3>Education</h3>
          <p><b>Dalhousie University</b></p>
          <p>Bachelors of Computer Science, GPA: 4.03</p>
        </div>
        <div id="Experience" className="Experience">
          <h3>Experience</h3>
          <p><b>Data Analyst Intern | python, MySQL, GitHub, JavaScript</b></p>
          <p><b>Dresma.ai</b></p>
          <p>• Assisted the implementation of advanced data labelling for enhanced data recognition</p>
          <p>• Led the labelling of eCommerce, Automobiles and Food products resulting in 10% enhanced recognition.</p>
          <p>• Optimized sorting with implementation of 20% efficient algorithms.</p>
          <p><b>Full Stack Developer | PHP, SQL, Gitlab, Bootstrap</b></p>
          <p>• Implemented a secure login system with database integration, reducing unauthorized access attempts by 30%.</p>
          <p>• Enhanced e-commerce platform with a robust shopping cart, improving user experience and driving higher average orders.</p>
          <p>• Designed and implemented a structured database for efficient storage and retrieval of book details, ensuring accuracy and organization.</p>
        </div>
        <div id="projects" className="projects">
          <h3>Projects</h3>
          <p><b><a href="https://github.com/YashRoushan/Jobify">JOBIFY | HTML, CSS, React.JS, Node.JS, Express.JS, MongoDB</a></b></p>
          <p>• Achievement: Increased user engagement by 50% through the design of a MERN-stack application to streamline the job process</p>
          <p>• Delivered enhanced user experience by applying advanved features such as CRUD operations, data caching, and API integration, resulting in 40% increase in user satisfaction.</p>
          <p>• Deployed the application online using Render, providing global accessibility with 100 API calls</p>
          <p><b>FLIGHT CHECK WEBSITE | HTML, CSS, JavaScript</b></p>
          <p>• Designed and implemented a comprehensive search engine for displaying real-time flight data, handling 1000 simultaneus queries per second.</p>
          <p>• We developed 10 HTML prototypes and prepared 15 XHTML documents integrated with CSS style sheets to enhance the user interface</p>
          <p>• Displayed a detail-oriented approach in ensuring the seamless integration of flight information, allowing users to obtain data by entering specific locations, resulting in a 60% increase in user satisfaction.</p>
        </div>
        <div id="technicalSkills" className="technicalSkills">
          <h3>Technical Skills</h3>
          <p><b>Languages: </b>JavaScript, HTML, CSS, PHP, SQL, Python, Java, MERN Stack, C </p>
          <p><b>Developer Tools: </b>Git, Docker, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse </p>
          <p><b>Security Tools: </b>Web Application Firewalls, OpenVAS, OpenSSL, VeraCrypt</p>
          <p><b>Collaboration Tools: </b>Jira, Confluence, Teams </p>
          <p><b>Certifications: </b> <a href="https://www.udemy.com/certificate/UC-cb82e4e4-4b90-45b0-8374-4b25d8f5d7bd/">MERN Stack</a>,<a href="https://www.coursera.org/account/accomplishments/verify/YMBYDH2TV3NK">Programming for Everybody (Python)</a> , <a href="https://www.coursera.org/account/accomplishments/records/BZZVD8L2UQGY">Python Data Structure</a> </p>
        </div>
      </div>
      <div id="game" className="game">
        <header className="App-header">
          <h1>
            While you are here.... Try this Click Couter!
          </h1>
          <h1>Count: <span className='count'>{clickCount}</span></h1>
          <p>
            Yash Roushan - CSCI 3172 - Lab 6
          </p>
          <button className='counterButton' onClick={countClicks}>Count++</button>
        </header>
      </div>
    </div>
  );
}

export default App;

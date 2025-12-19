import React from "react";

function Resume() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Bhavdipsinh Parmar</h1>

      <p>
        <strong>Phone:</strong> +91 9426465632 |
        <strong> Email:</strong> jayesh15@gmail.com |
        <strong> Location:</strong> Bhavnagar, Gujarat, India
      </p>

      <hr />

      <h2>Professional Summary</h2>
      <p>
        Fresher Full Stack Web Developer with hands-on experience in MERN Stack (Express.js, React.js,
        Node.js). Completed intensive training from The Easy Learn Academy. Built multiple live projects including
        E-commerce website and Task Management application. Actively seeking Junior Web Developer / Front-end Developer /
        MERN Stack Developer role.
      </p>

      <h2>Technical Skills</h2>
      <ul>
        <li>HTML5, CSS3, JavaScript</li>
        <li>React.js, Redux</li>
        <li>Node.js, Express.js</li>
        <li>MongoDB, Mongoose</li>
        <li>RESTful APIs</li>
        <li>Git, GitHub</li>
        <li>Responsive Web Design</li>
        <li>Postman, VS Code</li>
      </ul>

      <h2>Projects</h2>

      <p><strong>E-Commerce Website</strong> | React.js, Node.js, Express.js, MongoDB</p>
      <ul>
        <li>Developed full-stack online shopping application with user authentication and admin panel</li>
        <li>Implemented product catalog, shopping cart, Razorpay payment gateway integration</li>
        <li>Used JWT for secure login and MongoDB for storing products and orders</li>
      </ul>

      <p><strong>Task Management Application</strong> | MERN Stack</p>
      <ul>
        <li>Created CRUD application for managing daily tasks with user registration/login</li>
        <li>Used React for frontend, Node.js + Express backend, MongoDB database</li>
        <li>Deployed on Render platform</li>
      </ul>

      <p><strong>Weather Application</strong> | HTML, CSS, JavaScript</p>
      <ul>
        <li>Built responsive app that shows real-time weather using OpenWeatherMap API</li>
        <li>Added city search and 5-day forecast feature</li>
      </ul>

      <h2>Education</h2>
      <p>
        <strong>Higher Secondary Certificate (HSC) - Science Stream</strong><br />
        Gharshala Self Finance And Home School, Bhavnagar — 2019
      </p>

      <p>
        <strong>Full Stack Web Development (MERN)</strong><br />
        The Easy Learn Academy — 2024-2025<br />
        Duration: 12 months intensive learning and training
      </p>

      <h2>Certifications</h2>
      <ul>
        <li>MERN Stack Development - The Easy Learn Academy</li>
        <li>Responsive Web Design - freeCodeCamp</li>
        <li>JavaScript Algorithms and Data Structures - freeCodeCamp</li>
      </ul>
    </div>
  );
}

export default Resume;

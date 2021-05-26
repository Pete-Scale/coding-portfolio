import React from 'react'
import './Footer.css'

const Footer = () => (
  <nav className="navbar fixed-bottom p-2 footer-background">
    <div class="container-fluid justify-content-center">
      <p className="nav-item languages">
        <b className="title">Languages: </b>JavaScript ES6+, CSS3, HTML5, JQuery, Bootstrap, APIs, Node, Express, MySQL, Sequelize, MongoDB, Mongoose, React
      </p>
    </div>
    <div class="container-fluid justify-content-center">
      <ul className="nav">
        <li className="nav-item">
          <a href="https://drive.google.com/file/d/1ZMPyRjXWVjIzte434b-BSeAScQh28U9b/view?usp=sharing" target="_blank" rel="noreferrer" title="Pete Scale Resume" className="resume">
            Resume
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Footer
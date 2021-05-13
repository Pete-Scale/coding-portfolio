import React from 'react'
import './Footer.css'

const Footer = () => (
  <div className="container-fluid text-center p-2">
    <a href="https://github.com/Pete-Scale" target="_blank" rel="noreferrer" title="Pete Scale Github Profile">
      <span className="icons"><i className="fa fa-github fa-3x"></i></span>
    </a>
    <a href="https://www.linkedin.com/in/pete-scale-53935975/" target="_blank" rel="noreferrer" title="Pete Scale LinkedIn">
      <span className="icons"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></span>
    </a>
  </div>
)

export default Footer
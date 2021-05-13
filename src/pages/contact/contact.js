import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <container className="contactFont">
      <section className="row mt-5 format">
        <div className="col-md-6 position">
          <p>petescale@gmail.com</p>
          <span className="icons"><i className="fa fa-envelope-square fa-3x"></i></span>
        </div>
        <div className="col-md-6 position">
          <p>(630)926-5146</p>
          <span className="icons"><i className="fa fa-phone-square fa-3x"></i></span>
        </div>
      </section>
      <section className="row">
        <div className="col-md-6 position">
          <p>LinkedIn</p>
          <a href="https://www.linkedin.com/in/pete-scale-53935975/" target="_blank" rel="noreferrer" title="Pete Scale LinkedIn" className="pt-0">
            <span className="icons"><i className="fa fa-linkedin-square fa-3x"></i></span>
          </a>
        </div>
        <div className="col-md-6 position">
          <p>GitHub</p>
          <a href="https://github.com/Pete-Scale" target="_blank" rel="noreferrer" title="Pete Scale Github Profile" className="pt-0">
            <span className="icons"><i className="fa fa-github-square fa-3x"></i></span>
          </a>
        </div>
      </section>
    </container>
  )
}
        


export default Contact
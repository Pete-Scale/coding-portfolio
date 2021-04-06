import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
      {/* row 1 */}
      <section className="row mt-5">
        {/* column 1 */}
        <div className="col-md-6">
          <svg></svg>
          <p className="contactFontChange">petescale@gmail.com</p>
        </div>
        {/* column 2 */}
        <div className="col-md-6">
          <svg></svg>
          <p className="contactFontChange">(630)926-5146</p>
        </div>
      </section>
      {/* row 2 */}
      <section className="row">
        {/* column 1 */}
        <div className="col-md-6">
          <svg></svg>
          <a href="https://www.linkedin.com/in/pete-scale-53935975/" target="_blank" className="contactFontChange">LinkedIn</a>
        </div>
        {/* column 2 */}
        <div className="col-md-6">
          <svg></svg>
          <a href="https://github.com/Pete-Scale" target="_blank" className="contactFontChange">GitHub</a>
        </div>
      </section>
    </>
  )
}
        


export default Contact
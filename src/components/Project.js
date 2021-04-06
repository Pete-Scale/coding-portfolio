import React from 'react'

const Project = (props) => {

  return (
    <section className="row mt-5">
      {/* column 1 */}
      <div className="col-md-6">
        <img src={props.image} className="portfolioImageChange float-left" alt={props.alt}/>
        <a style={{display: "table-cell"}} href={props.project_href} target="_blank" rel="noopener noreferrer" className="portfolioFontChange mr-4">
          {props.name}
        </a>
        <br/>
        <a style={{display: "table-cell"}} href={props.repo_href} target="_blank" rel="noopener noreferrer" className="portfolioFontChange">
          Repository
        </a>
      </div>
      {/* column 2 */}
      <div className="col-md-6">
        <p className="portfolioFontChange">
          {props.description}
        </p>
      </div>          
    </section>
  )
}

export default Project
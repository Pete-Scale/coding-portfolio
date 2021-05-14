import React from 'react'
import './Project.css'

const Project = (props) => (
  <section className="row mt-3 borderCard">
    {/* column 1 */}
    <div className="col-lg-2 d-flex pt-2">
      <img src={props.image} className="portfolioImage" alt={props.alt}/>
    </div>
    <div className="col-lg-4 col-md-12 d-flex textAlign">
      <a style={{display: "table-cell"}} href={props.project_href} target="_blank" rel="noopener noreferrer" className="portfolioFont project link">
        {props.name}
      </a>
      <br/>
      <a style={{display: "table-cell"}} href={props.repo_href} target="_blank" rel="noopener noreferrer" className="portfolioFont repo link">
        Repository
      </a>
    </div>
    {/* column 2 */}
    <div className="col-lg-6">
      <p className="portfolioFont description">
        {props.description}
      </p>
    </div>          
  </section>
)

export default Project
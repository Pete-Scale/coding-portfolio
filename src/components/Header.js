import React from 'react'

const Header = (props) => (
  <header className="row">
    <div className="col-md-12">
      <h1 className="h1-responsive font-weight-bold my-4">
        {props.title}
      </h1>
    </div>
  </header>
)

export default Header
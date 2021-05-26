import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => (
  <nav className="navbar navbar-background">
    <p className="navbar-brand">Pete Scale</p>
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link to="/" className="nav-link">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link">Contact</Link>
      </li>
      <li className="nav-item">
        <Link to="/portfolio" className="nav-link" >Portfolio</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar({mode,toggleMode,alert}) {
  return (
    <>
<nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`} >
<div className="container-fluid">
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
        {/* <Link className="nav-link" to="/">Home</Link> */}

      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/">Home</a></li>
          <li><a className="dropdown-item" href="/">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="/">satish profile</a></li>
        </ul>
     </li>
      <li className="nav-item">

      <a className="nav-link" href="/about">About</a >   
      {/* <Link className="nav-link" to="/about">About</Link >    */}
      
     </li>
    </ul>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-primary" type="submit">Search</button>
    </form><br /><br />
        <div className={`form-check form-switch text-${mode=='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={toggleMode} type="checkbox"  role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {mode} Mode</label>
</div>
  </div>
</div>
</nav>
</>
  )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    about:PropTypes.string
}
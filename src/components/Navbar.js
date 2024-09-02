import React from 'react'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <p className="navbar-brand" >{props.title}</p>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <p className="nav-link" >Home <span className="sr-only">(current)</span></p>
        </li>
        <li className="nav-item">
          <p className="nav-link" >{props.aboutText}</p>
        </li>
      </ul>
      <form className="form-inline my-2 mx-4">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
<div className={`custom-control custom-switch text-${props.mode === "light" ? "dark" : "light"}`}>
  <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1"/>
  <label className="custom-control-label" htmlFor="customSwitch1">Enable DarkMode</label>
</div>
    </div>
  </nav>
  )
}



import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'#ced4da':'#343a40'} $bg-${props.mode==='light'?'#ced4da':'#343a40'}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style ={{color:'#1b4d97'}}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About" style ={{color:'#1b4d97'}}>About</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/Home">Home</Link>
        </li> */}
         
        
        
      </ul>
      
    </div>
  </div>
  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input"onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
</nav>
    )
}
Navbar.defaultProps={
    title:'TextUtils'
}
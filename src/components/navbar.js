import React from 'react';
import logo from "../logo1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}></FontAwesomeIcon>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="#">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="aboutMe">About ME</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Experience</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="contact-me">contact me</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
    )
}

export default navbar

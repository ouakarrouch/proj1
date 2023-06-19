import { Link } from 'react-router-dom';

import React from 'react'
import logo from '../../assets/images/logo.png'
import Navitem, {NavitemDropDown} from '../../components/NavItem/NavItem'
import './Header.css'

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark cyborg-navbar">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src={logo} alt=""/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Navitem>
          <a className="nav-link" href="/">Home</a>
          </Navitem>
          <Navitem>
            <a className="nav-link" href="/#">Browse</a>
          </Navitem>
          <Navitem>
            <a className="nav-link" href="/#">Details</a>
          </Navitem>
          <Navitem>
          <a className="nav-link" href="/#">Streams</a>
        </Navitem>
        <Navitem>
        <a className="nav-link" href="/Profile">profile</a>
        </Navitem>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Header
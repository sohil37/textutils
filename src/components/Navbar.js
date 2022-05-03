import React from "react";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.colourTheme!=='light'?'dark':'light'} bg-${props.colourTheme}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>

              <div className={`text-${props.colourTheme!=='light'?'light':'dark'} form-check`}>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioLight" value="light" checked={props.isWhiteChecked} onChange={props.toggleColourTheme}/>
                <label className="form-check-label me-2" htmlFor="radioLight">
                  Light Theme
                </label>
              </div>
              <div className={`text-${props.colourTheme!=='light'?'light':'dark'} form-check`}>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioRed" value="danger" checked={props.isRedChecked} onChange={props.toggleColourTheme}/>
                <label className="form-check-label me-2" htmlFor="radioRed">
                  Red Theme
                </label>
              </div>
              <div className={`text-${props.colourTheme!=='light'?'light':'dark'} form-check`}>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioBlue" value="primary" checked={props.isBlueChecked} onChange={props.toggleColourTheme}/>
                <label className="form-check-label me-2" htmlFor="radioBlue">
                  Blue Theme
                </label>
              </div>
              <div className={`text-${props.colourTheme!=='light'?'light':'dark'} form-check`}>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioGreen" value="success" checked={props.isGreenChecked} onChange={props.toggleColourTheme}/>
                <label className="form-check-label me-2" htmlFor="radioGreen">
                  Green Theme
                </label>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'TextUtils'
}
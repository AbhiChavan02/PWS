import  { useState } from "react";
import logo from "../../assets/Images/logo.png";
import "../Home/Home.css";
import "react-router-dom"
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-section">
      <div className="navbar navbar-expand-lg custom-nav-container">
        {/* Logo */}
        <Link to="/"
          className={`navbar-brand ${isMenuOpen ? "logo-hidden" : ""}`}
          
          aria-label="Homepage"
        >
          <img src={logo} alt="Logo" className="brand-logo" />
        </Link>

        {/* Hamburger Icon */}
        <button
          className={`navbar-toggler ${isMenuOpen ? "collapsed" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarContent"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"

          
        >
          
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarContent"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Blue Screen with Close Button when Menu is Open */}
      {isMenuOpen && (
        <div className="blue-screen">
          <button
            className="close-btn"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            &#10005; {/* Close icon */}
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;

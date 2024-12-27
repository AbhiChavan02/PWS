import React from "react";
import "./Footer.css";
import "react-router-dom"
import "@fortawesome/fontawesome-free";
import image from "../../assets/Images/WhatsApp.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import Logo from "../../assets/Images/Logo.png"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Popular Links Section */}
        {/* <div className="footer-section">
          <h3>Popular Link</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Career</li>
          </ul>
        </div> */}

        <div className="img-section" id="/" aria-label="Homepage">
          <img src={Logo} alt="logo" />
          <p>Pawar Wealth Solutions is a leading <br/> financial advisoryfirm  specializing in <br/>comprehensive wealthmanagement,<br/> investment planning, and <br/> financialconsulting services.</p>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Financial Planning</li>
            <li>Investment Management</li>
            <li>Insurance Solutions</li>
            <li>Real Estate Advisory</li>
            <li>Consultation Services</li>
            <li>Training and Workshops</li>
          </ul>
        </div>

        {/* Get In Touch Section */}
        <div className="footer-section contact-info">
          <h3>Get In Touch</h3>
          <p><FaPhone /> +91 9096649556</p>
          <p><IoMail /> pawarwealthsolutions@gmail.com</p>
          <p>
          <FaMapMarkerAlt /> Ganga Trueno Business Park, <br /> Air Force Area, New Airport
            Rd, <br /> Sanjay Park, Pune, Maharashtra 411014
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/pawarwealthsolutions/" aria-label="Instagram">
            <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
            <FaSquareFacebook />
            </a>
            <a href="https://www.linkedin.com/company/pawar-wealth-solutions/" aria-label="LinkedIn">
              <FaLinkedin/>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © PWS, All Right Reserved.<br/><br/> Designed By{" "}
          <a href="https://www.pawartechnologyservices.com/">PTS</a>
        </p>
        {/* <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Cookies</a>
          <a href="#">Help</a>
          <a href="#">FAQs</a>
        </div> */}
      </div>

      {/* WhatsApp Button */}
       <a href="https://wa.me/9096649556" target="_blank" id="whatsappBtn" className="whatsapp-btn">
        <img src={image} alt="WhatsApp" className="whatsApp-logo" />
      </a> 
    </footer>
  );
};

export default Footer;

import React from 'react'
import { Image } from 'react-bootstrap';
import './AboutUs.css';
import Icon from '../../assets/Images/about11.jpg'; 
import WhatsApp from '../../assets/Images/WhatsApp.png';
function AboutUs() {
  return (
    <div>
      <>
    <div className="aboutus" id='about'>
        <h1 className='hit'>About <span className='us'>Us</span></h1>
    
    <div className='about'>

   
      <div className="left-section">
        <Image src={Icon} className='IconImage' />
      </div>
      <div className="right-section">
      <h2 className='hello'>Welcome to Our Company</h2>
        <p className='para'>
        Pawar Wealth Solutions is a leading financial advisoryfirm specializing in comprehensive wealthmanagement, investment planning, and financialconsulting services.
        </p>
        <p className='para'>
        Our goal is to help individuals, families, and businesses achieve financial security and growth through expert guidance, tailored strategies, and a client-first approach.
        </p>
        <button className="read">Read More</button>
      </div>
      </div>
    </div>

    </>
    {/* WhatsApp Button */}
           {/* <a href="https://wa.me/9096649556" target="_blank" id="whatsappBtn" className="whatsapp-btn">
            <img src={WhatsApp} alt="WhatsApp" className="whatsApp-logo" />
          </a>  */}
    </div>
  )
}

export default AboutUs
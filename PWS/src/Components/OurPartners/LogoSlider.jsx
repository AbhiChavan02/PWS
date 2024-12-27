// LogoSlider.js
import React from 'react';
import './LogoSlider.css';
import logo1 from '../../assets/Images/bajaj1.png'
import logo2 from '../../assets/Images/hdfc.png'
import logo3 from '../../assets/Images/icici1.png'
import logo4 from '../../assets/Images/iffco1.png'
import logo5 from '../../assets/Images/magma1.png'
import logo6 from '../../assets/Images//reliance.png'
import logo7 from '../../assets/Images/sbi1.png'
import logo8 from '../../assets/Images/tata1.png'

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8
  
];

const LogoSlider = () => {
  return (
    <div className="logo-slider">
    <p className='our'>Our <span className='Partner'>Partner</span></p>
      <div className="logo-slider-inner">
        {/* Duplicate the logos for seamless effect */}
        {logos.concat(logos).map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
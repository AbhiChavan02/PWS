import React from 'react'
import '../WhyUs/WhyUs.css'
import img1 from '../../assets/Images/w1.png'
import img2 from '../../assets/Images/w2.png'
import img3 from '../../assets/Images/growth.png'

function WhyUs() {
  return (
    <div>
        <div className="container">
      <h1 className='why'>Why Choose Our <span className="highlight">Company</span></h1>
      <div className="card-container">
        <div className="card">
          <div className="icon">
            <img src={img1} alt='img'/>
          </div>
          <h3>Expertise</h3>
          <p>Decades of combined experience in wealth management.</p>
          <button className="butt">Read More</button>
        </div>
        <div className="card">
          <div className="icon">
          <img src={img2} alt='img'/>
          </div>
          <h3>Trust and Integrity</h3>
          <p>Building long-term relationships based on transparency.</p>
          <button className="butt">Read More</button>
        </div>
        <div className="card">
          <div className="icon">
            <img src={img3} alt='img' />
          </div>
          <h3>Comprehensive Services</h3>
          <p>A one-stop solution for all financial needs and planning.</p>
          <button className="butt">Read More</button>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default WhyUs
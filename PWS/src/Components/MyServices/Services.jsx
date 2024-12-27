import React from 'react'
import '../MyServices/Services.css'
import icon1 from '../../assets/Images/icon1.png'
import icon2 from '../../assets/Images/w3.png'
import icon3 from '../../assets/Images/icon3.png'
import icon4 from '../../assets/Images/icon4.png'
import icon5 from '../../assets/Images/s1.png'
import icon6 from '../../assets/Images/s1.png'

function Services() {
  return (
    <div>
        <section className="services" id='services'>
      <h2 className="services-title">
        Our <span className="highlight">Services</span>
      </h2>
      <div className="services-container">
        {/* Financial Planning */}
        <div className="service-card">
          <div className="service-icon">
            <img
              src={icon1}
              alt="Financial Planning"
            />
          </div>
          <h3>Financial Planning</h3>
          <p>
            Personalized strategies tailored to individual financial situations
            and future aspirations.
          </p>
          <button className="read-more">Read More</button>
        </div>

        {/* Investment Management */}
        <div className="service-card">
          <div className="service-icon">
            <img
              src={icon2}
              alt="Investment Management"
            />
          </div>
          <h3>Investment Management</h3>
          <p>
            Continuous monitoring and rebalancing of portfolios to adapt to
            changing market.
          </p>
          <button className="read-more">Read More</button>
        </div>

        {/* Insurance Solutions */}
        <div className="service-card">
          <div className="service-icon">
            <img
              src={icon3}
              alt="Insurance Solutions"
            />
          </div>
          <h3>Insurance Solutions</h3>
          <p>
            Risk management strategies to ensure comprehensive protection for
            clients and their families.
          </p>
          <button className="read-more">Read More</button>
        </div>

        {/* Retirement Planning */}
        <div className="service-card">
          <div className="service-icon">
            <img
              src={icon4}
              alt="Retirement Planning"
            />
          </div>
          <h3>Real Estate Advisory</h3>
          <p>
          Assistance with buying, selling,and managing real estate assets to maximize returns.
          </p>
          <button className="read-more">Read More</button>
        </div>

        {/* Tax Planning */}
        <div className="service-card">
          <div className="service-icon">
            <img
              src={icon5}
              alt="Tax Planning"
            />
          </div>
          <h3>Consultation Services</h3>
          <p>
          Hourly and project-based consulting options available for specific financial challenges.
          </p>
          <button className="read-more">Read More</button>
        </div>

        {/* Estate Management */}
        <div className="service-card">
          <div className="service-icon">
            <img
              src={icon6}
              alt="Estate Management"
            />
          </div>
          <h3>Training and Workshops</h3>
          <p>
          Webinars and online courses for continued financial education and self-empowerment.
          </p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Services
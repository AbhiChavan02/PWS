import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display SweetAlert2 success message
    Swal.fire({
      title: 'Thank you!',
      text: 'We will contact you soon.',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      // Redirect to home page after the alert
      navigate('/');
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container" id="contact">
      <div className="notify-section">
        <p><iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.163900776918!2d73.90403407514435!3d18.5666480677653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaf73cdbaca2fa7b3%3A0xf83128bd8d561879!2sPawar%20Technology%20Services!5e0!3m2!1sen!2sin!4v1734420547234!5m2!1sen!2sin"
          width="100%" 
          height="446px" 
          // style={styles.iframe} 
          allowFullScreen="" 
          loading="lazy"
          ></iframe></p>

        
      </div>
      <div className="form-section">
        <h2>
          Contact<span className="usa"> Us</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className="bot" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

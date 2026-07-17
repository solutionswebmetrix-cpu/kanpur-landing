import React, { memo } from 'react';
import { FaSolarPanel, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { COMPANY, whatsappLink } from '../config/site';

const Footer = memo(() => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3><img src="/logo.png" alt="Kanpur Services" style={{ maxHeight: '40px', marginRight: '10px' }} /> Kanpur Services</h3>
            <p>Kanpur's #1 Solar Energy Company. Complete rooftop solar solutions, PM Surya Ghar Yojana subsidy assistance, home appliance repair and more.</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Solar Services</Link></li>
              <li><Link to="/">Why Solar</Link></li>
              <li><Link to="/services">PM Surya Ghar</Link></li>
              <li><Link to="/">Reviews</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="contact-list">
              <li><FaMapMarkerAlt /> {COMPANY.address}</li>
              <li><FaPhone /> <a href={`tel:+91${COMPANY.phone}`}>{COMPANY.phone}</a></li>
              <li><FaEnvelope /> <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
              <li><FaClock /> {COMPANY.hours}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Kanpur Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;

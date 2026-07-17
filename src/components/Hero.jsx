import React, { memo } from 'react';
import { FaStar, FaUsers, FaDollarSign, FaShieldAlt, FaCalendarCheck, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { COMPANY, IMG_SOLAR_HOME, whatsappLink } from '../config/site';
import { useModal } from '../context/ModalContext';

const Hero = memo(() => {
  const { openModal } = useModal();

  return (
    <section className="hero" id="home">
      <div className="hero-blob b1"></div>
      <div className="hero-blob b2"></div>
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow reveal">
            <span className="dot"></span>
            #1 Solar Company in Kanpur
          </div>
          <h1 className="reveal delay-1">
            Power Your Home with Premium
            <span className="accent">Solar Energy Solutions</span>
          </h1>
          <p className="sub reveal delay-2">
            Complete Solar Installation, Government Subsidy Assistance, Solar Maintenance &amp; Home Appliance Services in Kanpur.
          </p>
          <div className="hero-badges reveal delay-3">
            <span className="hero-badge"><FaStar /> 4.6 Google Rating</span>
            <span className="hero-badge"><FaUsers /> 5000+ Happy Customers</span>
            <span className="hero-badge"><FaDollarSign /> Government Subsidy Support</span>
            <span className="hero-badge"><FaShieldAlt /> 25 Years Panel Warranty</span>
          </div>
          <div className="hero-cta reveal delay-4">
            <button className="btn btn-gold" onClick={() => openModal('Residential Rooftop Solar')}>
              <FaCalendarCheck /> Get Free Quote
            </button>
            <a href={`tel:+91${COMPANY.phone}`} className="btn btn-call">
              <FaPhone /> Call Now
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-illustration reveal delay-3">
          <img src={IMG_SOLAR_HOME} alt="Luxury home rooftop solar installation" loading="lazy" className="hero-img" />
        </div>
      </div>
    </section>
  );
});

export default Hero;

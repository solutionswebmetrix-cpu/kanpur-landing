import React, { memo } from 'react';
import { FaCheck, FaCalendarCheck } from 'react-icons/fa';
import { SOLAR_SERVICES } from '../config/site';
import { useModal } from '../context/ModalContext';
import { iconMap } from '../utils/iconMap';
import SectionHeader from './SectionHeader';

const Services = memo(() => {
  const { openModal } = useModal();

  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeader
          badge="What We Offer"
          title={<>Our Solar <span className="accent">Services</span></>}
          subtitle="Complete range of solar energy solutions for your home, office or industry"
          className="reveal"
        />
        <div className="services-grid">
          {SOLAR_SERVICES.map((service, index) => {
            const IconComponent = iconMap[service[4]];
            return (
              <div key={index} className="service-card reveal" style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="service-img-wrapper">
                  <img src={service[5]} alt={service[0]} loading="lazy" className="service-img" />
                </div>
                <div className="service-content">
                  {IconComponent && <IconComponent className="service-icon" />}
                  <h3>{service[0]}</h3>
                  <p>{service[2]}</p>
                  <div className="service-features">
                    {service[3].map((feature, idx) => (
                      <span key={idx} className="service-feature"><FaCheck /> {feature}</span>
                    ))}
                  </div>
                  <div className="service-actions">
                    <button
                      className="btn btn-gold btn-small"
                      onClick={() => openModal(service[0])}
                    >
                      <FaCalendarCheck /> Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default Services;

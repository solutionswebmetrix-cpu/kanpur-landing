
import React from 'react';
import { useModal } from '../context/ModalContext';
import { SOLAR_TYPES } from '../config/site';
import { FaCheck, FaCalendarCheck } from 'react-icons/fa';
import { iconMap } from '../utils/iconMap';
import SectionHeader from './SectionHeader';

const SolarTypes = () => {
  const { openModal } = useModal();

  return (
    <section className="section why-solar" id="solar-types">
      <div className="container">
        <SectionHeader
          badge="Solar Solutions"
          title={<>Choose Your <span className="accent">Solar Type</span></>}
          subtitle="Select the best solar system for your needs"
          className="reveal"
        />
        <div className="solar-types-grid">
          {SOLAR_TYPES.map((type, index) => {
            const IconComponent = iconMap[type[5]];
            return (
              <div key={index} className="solar-type-card reveal" style={{ transitionDelay: `${index * 50}ms` }}>
                {IconComponent && <IconComponent className="type-icon" />}
                <h3>{type[0]}</h3>
                <p className="type-desc">{type[1]}</p>
                <p className="type-best">{type[2]}</p>
                <div className="type-advantages">
                  {type[3].map((adv, idx) => (
                    <span key={idx} className="type-adv">
                      <FaCheck /> {adv}
                    </span>
                  ))}
                </div>
                <p className="type-cost">{type[4]}</p>
                <button
                  className="btn btn-gold btn-small"
                  onClick={() => openModal(`${type[0]} Solar System`)}
                >
                  <FaCalendarCheck /> Book Consultation
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolarTypes;

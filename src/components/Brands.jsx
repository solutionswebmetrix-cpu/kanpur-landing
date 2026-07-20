
import React from 'react';
import { SOLAR_BRANDS } from '../config/site';
import { iconMap } from '../utils/iconMap';
import SectionHeader from './SectionHeader';

const Brands = () => {
  return (
    <section className="section brands" id="brands">
      <div className="container">
        <SectionHeader
          badge="Our Partners"
          title={<>Trusted <span className="accent">Solar Brands</span></>}
          subtitle="We work with only the best solar brands"
          className="reveal"
        />
        <div className="brands-grid">
          {SOLAR_BRANDS.map((brand, index) => {
            const IconComponent = iconMap[brand[1]];
            return (
              <div
                key={index}
                className="brand-card reveal"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {IconComponent && <IconComponent />}
                <h4>{brand[0]}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;

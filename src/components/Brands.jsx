
import React from 'react';
import { SOLAR_BRANDS } from '../config/site';
import { iconMap } from '../utils/iconMap';

const Brands = () => {
  return (
    <section className="section brands" id="brands">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Our Partners</span>
          <h2>Trusted <span className="accent">Solar Brands</span></h2>
          <p className="section-desc">We work with only the best solar brands</p>
        </div>
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

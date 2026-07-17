import React, { memo } from 'react';
import { WHY_CHOOSE_US } from '../config/site';
import { iconMap } from '../utils/iconMap';

const WhyChooseUs = memo(() => {
  return (
    <section className="section why-choose-us" id="why-choose-us">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Why Choose Us</span>
          <h2>Why Choose <span className="accent">Kanpur Services</span>?</h2>
          <p className="section-desc">We are the trusted partner you need for your solar journey</p>
        </div>
        <div className="why-choose-grid">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item[1]];
            return (
              <div key={index} className="why-choose-card reveal" style={{ transitionDelay: `${index * 80}ms` }}>
                {IconComponent && <IconComponent />}
                <h3>{item[0]}</h3>
                <p>{item[2]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default WhyChooseUs;

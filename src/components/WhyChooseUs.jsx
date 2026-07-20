import React, { memo } from 'react';
import { WHY_CHOOSE_US } from '../config/site';
import { iconMap } from '../utils/iconMap';
import SectionHeader from './SectionHeader';

const WhyChooseUs = memo(() => {
  return (
    <section className="section why-choose-us" id="why-choose-us">
      <div className="container">
        <SectionHeader
          badge="Why Choose Us"
          title={<>Why Choose <span className="accent">Kanpur Services</span>?</>}
          subtitle="We are the trusted partner you need for your solar journey"
          className="reveal"
        />
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

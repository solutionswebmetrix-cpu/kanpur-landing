
import React from 'react';
import { INSTALLATION_PROCESS } from '../config/site';
import { FaArrowDown } from 'react-icons/fa';
import { iconMap } from '../utils/iconMap';

const Process = () => {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">How It Works</span>
          <h2>Solar Installation <span className="accent">Process</span></h2>
          <p className="section-desc">7 simple steps to switch to solar</p>
        </div>
        <div className="process-wrapper">
          {INSTALLATION_PROCESS.map((step, index) => {
            const IconComponent = iconMap[step[2]];
            return (
              <div
                key={index}
                className="process-step reveal"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  {IconComponent && <IconComponent className="step-icon" />}
                  <h3>{step[0]}</h3>
                  <p>{step[1]}</p>
                </div>
                {index < INSTALLATION_PROCESS.length - 1 && (
                  <div className="step-arrow">
                    <FaArrowDown />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;

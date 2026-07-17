import React, { useEffect } from 'react';
import ServicesComponent from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import SolarCalculator from '../components/SolarCalculator';
import Contact from '../components/Contact';

const Services = () => {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <>
      <div style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Services</span>
            <h2>All Our <span className="accent">Services</span></h2>
            <p className="section-desc">Explore our complete range of solar and home appliance services</p>
          </div>
        </div>
      </div>
      <ServicesComponent />
      <WhyChooseUs />
      <SolarCalculator />
      <Contact />
    </>
  );
};

export default Services;

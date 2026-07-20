import React, { useEffect } from 'react';
import ServicesComponent from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import SolarCalculator from '../components/SolarCalculator';
import Contact from '../components/Contact';
import SectionHeader from '../components/SectionHeader';

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
          <SectionHeader
            badge="Our Services"
            title={<>All Our <span className="accent">Services</span></>}
            subtitle="Explore our complete range of solar and home appliance services"
          />
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

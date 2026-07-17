import React, { useEffect } from 'react';
import ContactComponent from '../components/Contact';

const Contact = () => {
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
          <span className="section-tag">Contact Us</span>
            <h2>Get In <span className="accent">In Touch</span></h2>
            <p className="section-desc">We'd love to hear from you</p>
          </div>
        </div>
      </div>
      <ContactComponent />
    </>
  );
};

export default Contact;

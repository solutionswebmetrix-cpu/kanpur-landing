import React from 'react';

const About = () => {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Us</span>
          <h2>About <span className="accent">Kanpur Services</span></h2>
          <p className="section-desc">Your trusted partner for solar energy solutions in Kanpur</p>
        </div>
        <div style={{ marginTop: '40px', textAlign: 'center', fontSize: '1.1rem', color: '#555' }}>
          <p style={{ marginBottom: '20px' }}>We are Kanpur's leading solar energy company, dedicated to providing high-quality solar solutions for residential, commercial, and industrial clients.</p>
          <p style={{ marginBottom: '20px' }}>With years of experience, we offer complete solar installation, government subsidy assistance, maintenance, and home appliance services.</p>
          <p>Our mission is to make clean, renewable solar energy accessible to everyone in Kanpur and surrounding areas.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

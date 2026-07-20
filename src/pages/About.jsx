import React from 'react';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container">
        <SectionHeader
          badge="About Us"
          title={<>About <span className="accent">Kanpur Services</span></>}
          subtitle="Your trusted partner for solar energy solutions in Kanpur"
        />
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

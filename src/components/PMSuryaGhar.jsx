
import React from 'react';
import { useModal } from '../context/ModalContext';
import { PM_SURYA_GHAR } from '../config/site';
import { FaCheckCircle, FaStar, FaRupeeSign, FaList, FaFileAlt, FaRocket } from 'react-icons/fa';

const PMSuryaGhar = () => {
  const { openModal } = useModal();

  return (
    <section className="section pm-surya-ghar" id="pm-surya-ghar">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Government Scheme</span>
          <h2>PM Surya Ghar <span className="accent">Muft Bijli Yojana</span></h2>
          <p className="section-desc">Get up to ₹1,08,000 subsidy on rooftop solar. We handle the complete process!</p>
        </div>
        <div className="pm-grid reveal">
          <div className="pm-col">
            <h3><FaCheckCircle /> Eligibility</h3>
            <ul className="pm-list">
              {PM_SURYA_GHAR.eligibility.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="pm-col">
            <h3><FaStar /> Benefits</h3>
            <ul className="pm-list">
              {PM_SURYA_GHAR.benefits.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="pm-col">
            <h3><FaRupeeSign /> Subsidy Amount</h3>
            <ul className="pm-list">
              {PM_SURYA_GHAR.subsidy.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="pm-col">
            <h3><FaList /> Process</h3>
            <ul className="pm-list">
              {PM_SURYA_GHAR.process.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="pm-col">
            <h3><FaFileAlt /> Documents</h3>
            <ul className="pm-list">
              {PM_SURYA_GHAR.documents.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pm-cta reveal">
          <button
            className="btn btn-gold btn-large"
            data-service="PM Surya Ghar Solar"
            onClick={() => openModal('PM Surya Ghar Solar')}
          >
            <FaRocket /> Apply Now for PM Surya Ghar
          </button>
        </div>
      </div>
    </section>
  );
};

export default PMSuryaGhar;

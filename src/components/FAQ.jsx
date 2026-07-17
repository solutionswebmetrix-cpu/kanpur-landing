import React, { memo, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { SOLAR_FAQS } from '../config/site';

const FAQ = memo(() => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Questions?</span>
          <h2>Frequently Asked <span className="accent">Questions</span></h2>
          <p className="section-desc">Everything you need to know about solar and our services</p>
        </div>
        <div className="faq-wrapper">
          {SOLAR_FAQS.map((faq, index) => (
            <div
              key={index}
              className={`faq-item reveal ${openIndex === index ? 'open' : ''}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="faq-q" onClick={() => toggleFAQ(index)}>
                <h4>{faq[0]}</h4>
                <FaChevronDown />
              </div>
              <div className="faq-a">
                <p>{faq[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FAQ;

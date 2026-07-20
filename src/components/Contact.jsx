import React, { memo, useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope, FaClock, FaStar, FaPaperPlane, FaCheck } from 'react-icons/fa';
import { COMPANY, SOLAR_SERVICES, SECONDARY_SERVICES, whatsappLink } from '../config/site';
import api from '../api/axios';
import SectionHeader from './SectionHeader';

const Contact = memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    service: '',
    message: '',
    agree: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { agree, ...submitData } = formData;
      const response = await api.post('/submit-enquiry.php', submitData);
      if (response.data.success) {
        setIsSuccess(true);
        setFormData({
          name: '',
          phone: '',
          city: '',
          service: '',
          message: '',
          agree: false
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section contact-premium" id="contact">
      <div className="container">
        <SectionHeader
          badge="CONTACT US"
          title={<>Get In <span className="accent">Touch</span></>}
          subtitle="Ready to switch to solar? Contact us today for a free consultation."
          className="reveal"
        />
        <div className="contact-premium-grid reveal">
          <div className="contact-premium-info">
            <div className="contact-info-card">
                        <FaMapMarkerAlt />
                        <div>
                            <h3>Visit Us</h3>
                            <p>{COMPANY.address}</p>
                        </div>
                    </div>
            <div className="contact-info-card">
              <FaPhone />
              <div>
                <h3>Call Us</h3>
                <p><a href={`tel:+91${COMPANY.phone}`}>{COMPANY.phone}</a></p>
              </div>
            </div>
            <div className="contact-info-card">
              <FaWhatsapp />
              <div>
                <h3>WhatsApp Us</h3>
                <p><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Chat with us instantly</a></p>
              </div>
            </div>
            <div className="contact-info-card">
              <FaEnvelope />
              <div>
                <h3>Email Us</h3>
                <p><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
              </div>
            </div>
            <div className="contact-info-card">
              <FaClock />
              <div>
                <h3>Working Hours</h3>
                <p>{COMPANY.hours}</p>
              </div>
            </div>
            <div className="contact-info-card">
              <FaStar />
              <div>
                <h3>Google Rating</h3>
                <p>{COMPANY.rating} ★</p>
              </div>
            </div>
          </div>
          <div className="contact-premium-form-container">
            <div className="glass-card">
              {isSuccess ? (
                <div className="success-popup" style={{ display: 'block', padding: '20px 0' }}>
                  <div className="check"><FaCheck /></div>
                  <h3>Thank You!</h3>
                  <p>Your enquiry has been submitted successfully. Our team will contact you shortly.</p>
                  <div className="actions">
                    <button className="btn btn-gold" onClick={() => setIsSuccess(false)}>Continue</button>
                    <a href={whatsappLink(`Hello Kanpur Services,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nService: ${formData.service}\n\nPlease contact me.`)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                      <FaWhatsapp /> Send WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <h3>Send a Message</h3>
                  <form id="contactFormInline" className="enquiry-form" onSubmit={handleSubmit}>
                    <div className="form-grid">
                      <div className="field">
                        <label htmlFor="contactName">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          id="contactName"
                          placeholder="Enter your name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="field">
                        <label htmlFor="contactPhone">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          id="contactPhone"
                          placeholder="10-digit mobile"
                          maxLength="10"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="field">
                        <label htmlFor="contactCity">City</label>
                        <input
                          type="text"
                          name="city"
                          id="contactCity"
                          placeholder="Enter your city"
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="field">
                        <label htmlFor="contactService">Service</label>
                        <select
                          name="service"
                          id="contactService"
                          required
                          value={formData.service}
                          onChange={handleChange}
                        >
                          <option value="">Select Service</option>
                          {SOLAR_SERVICES.map((s, idx) => (
                            <option key={idx} value={s[0]}>{s[0]}</option>
                          ))}
                          {SECONDARY_SERVICES.map((s, idx) => (
                            <option key={`secondary-${idx}`} value={s[0]}>{s[0]}</option>
                          ))}
                        </select>
                      </div>
                      <div className="field field-full">
                        <label htmlFor="contactMessage">Message</label>
                        <textarea
                          name="message"
                          id="contactMessage"
                          placeholder="Describe your requirement (optional)"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="checkbox-row">
                        <input
                          type="checkbox"
                          name="agree"
                          id="contactAgree"
                          required
                          checked={formData.agree}
                          onChange={handleChange}
                        />
                        <label htmlFor="contactAgree">I agree to be contacted by Kanpur Services</label>
                      </div>
                      <button type="submit" className="form-submit" disabled={isSubmitting}>
                        <FaPaperPlane /> {isSubmitting ? 'Submitting...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;


import React, { useEffect, useCallback } from 'react';
import { useModal } from '../context/ModalContext';
import api from '../api/axios';
import { SOLAR_SERVICES, SECONDARY_SERVICES, COMPANY, whatsappLink } from '../config/site';
import { FaTimes, FaPaperPlane, FaCheck, FaWhatsapp } from 'react-icons/fa';

const Popup = () => {
  const {
    isModalOpen,
    selectedService,
    showSuccess,
    formData,
    closeModal,
    setShowSuccess,
    updateFormData,
  } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/submit-enquiry.php', {
        name: formData.name,
        phone: formData.phone,
        city: formData.city,
        service: formData.service,
        message: formData.message,
      });
      if (response.data.success) {
        setShowSuccess(true);
      }
    } catch (error) {
      console.error(error);
      alert('Failed to submit enquiry');
    }
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleClickOutside = useCallback(
    (e) => {
      if (e.target.id === 'modalOverlay') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, handleKeyDown, handleClickOutside]);

  if (!isModalOpen) return null;

  const allServices = [...SOLAR_SERVICES, ...SECONDARY_SERVICES];

  return (
    <div className="modal-overlay show" id="modalOverlay" onClick={handleClickOutside}>
      <div className="modal" id="serviceModal">
        <div className="modal-header">
          <h3 id="modalTitle">Get Free Quote</h3>
          <p>Fill the form below and our team will contact you soon.</p>
          <button className="modal-close" id="modalClose" aria-label="Close" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <div id="modalFormWrap" style={{ display: showSuccess ? 'none' : 'block' }}>
            <form className="enquiry-form" id="modalForm" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field">
                  <label for="name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    required
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label for="phone">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="10-digit mobile"
                    maxLength="10"
                    required
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label for="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={(e) => updateFormData('city', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label for="serviceSelect">Service</label>
                  <select
                    name="service"
                    id="serviceSelect"
                    required
                    value={formData.service}
                    onChange={(e) => updateFormData('service', e.target.value)}
                  >
                    <option value="">Select Service</option>
                    {allServices.map((s) => (
                      <option key={s[0]} value={s[0]}>
                        {s[0]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label for="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Describe your requirement (optional)"
                    value={formData.message}
                    onChange={(e) => updateFormData('message', e.target.value)}
                  ></textarea>
                </div>
                <div className="checkbox-row">
                  <input type="checkbox" name="agree" id="agreeCheckbox" required />
                  <label for="agreeCheckbox">I agree to be contacted by Kanpur Services</label>
                </div>
                <button type="submit" className="form-submit" id="modalSubmitBtn">
                  <FaPaperPlane /> Submit Enquiry
                </button>
              </div>
            </form>
          </div>
          <div id="successPopup" className="success-popup" style={{ display: showSuccess ? 'block' : 'none' }}>
            <div className="check">
              <FaCheck />
            </div>
            <h3>Thank You!</h3>
            <p>Your enquiry has been submitted successfully. Our team will contact you shortly.</p>
            <div className="actions">
              <button className="btn btn-gold" id="successCloseBtn" onClick={closeModal}>
                Continue
              </button>
              <a
                href={whatsappLink()}
                id="successWhatsAppBtn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <FaWhatsapp /> Send WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

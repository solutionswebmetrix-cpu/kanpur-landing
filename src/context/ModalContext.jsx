
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    service: '',
    message: '',
  });

  const openModal = (service = '') => {
    setSelectedService(service);
    setFormData(prev => ({ ...prev, service }));
    setIsModalOpen(true);
    setShowSuccess(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
    setShowSuccess(false);
    setFormData({
      name: '',
      phone: '',
      city: '',
      service: '',
      message: '',
    });
  };

  const updateFormData = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const value = {
    isModalOpen,
    selectedService,
    showSuccess,
    formData,
    openModal,
    closeModal,
    setShowSuccess,
    updateFormData,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PMSuryaGhar from '../components/PMSuryaGhar';
import SolarTypes from '../components/SolarTypes';
import Process from '../components/Process';
import Brands from '../components/Brands';
import WhyChooseUs from '../components/WhyChooseUs';
import SolarCalculator from '../components/SolarCalculator';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
  const location = useLocation();

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

  useEffect(() => {
    if (location.state?.scrollTo) {
      const timeoutId = window.setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 150);

      return () => window.clearTimeout(timeoutId);
    }
  }, [location.state?.scrollTo]);

  return (
    <>
      <Hero />
      <Services />
      <PMSuryaGhar />
      <SolarTypes />
      <Process />
      <Brands />
      <WhyChooseUs />
      <SolarCalculator />
      <Gallery />
      <Reviews />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;

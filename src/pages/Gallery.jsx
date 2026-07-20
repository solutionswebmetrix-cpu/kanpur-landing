import React, { useEffect } from 'react';
import GalleryComponent from '../components/Gallery';
import Contact from '../components/Contact';
import SectionHeader from '../components/SectionHeader';

const Gallery = () => {
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
            badge="Our Gallery"
            title={<>Our <span className="accent">Project Gallery</span></>}
            subtitle="Check out our solar installation projects"
          />
        </div>
      </div>
      <GalleryComponent />
      <Contact />
    </>
  );
};

export default Gallery;

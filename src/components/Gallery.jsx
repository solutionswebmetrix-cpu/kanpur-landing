import React, { memo } from 'react';
import { GALLERY_IMAGES } from '../config/site';
import SectionHeader from './SectionHeader';

const Gallery = memo(() => {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <SectionHeader
          badge="Our Work"
          title={<>Solar Project <span className="accent">Gallery</span></>}
          subtitle="Check out our recent solar installations"
          className="reveal"
        />
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((image, index) => (
            <div key={index} className="gallery-item reveal" style={{ transitionDelay: `${index * 60}ms` }}>
              <img src={image[1]} alt={image[0]} loading="lazy" className="gallery-image" />
              <div className="gallery-caption">{image[0]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Gallery;

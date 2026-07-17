import React, { memo } from 'react';
import { GALLERY_IMAGES } from '../config/site';

const Gallery = memo(() => {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Our Work</span>
          <h2>Solar Project <span className="accent">Gallery</span></h2>
          <p className="section-desc">Check out our recent solar installations</p>
        </div>
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((image, index) => (
            <div key={index} className="gallery-item reveal" style={{ transitionDelay: `${index * 60}ms` }}>
              <img src={image[1]} alt={image[0]} loading="lazy" />
              <div className="gallery-caption">{image[0]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Gallery;

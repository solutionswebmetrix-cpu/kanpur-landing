import React, { memo } from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import { REVIEWS } from '../config/site';

const Reviews = memo(() => {
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Happy Customers</span>
          <h2>Customer <span className="accent">Reviews</span></h2>
          <p className="section-desc">What our customers say about us</p>
        </div>
        <div className="reviews-grid reveal">
          {REVIEWS.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="review-text">"{review[3]}"</p>
              <div className="review-author">
                <FaUserCircle />
                <div>
                  <h5>{review[0]}</h5>
                  <p>{review[1]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Reviews;

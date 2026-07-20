import React, { memo } from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import { REVIEWS } from '../config/site';
import SectionHeader from './SectionHeader';

const Reviews = memo(() => {
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <SectionHeader
          badge="Happy Customers"
          title={<>Customer <span className="accent">Reviews</span></>}
          subtitle="What our customers say about us"
          className="reveal"
        />
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

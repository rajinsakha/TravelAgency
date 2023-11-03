import React, { useState } from "react";
import "./Testimonials.css";
import { testimonials } from "../../constants";
import { GrPrevious, GrNext } from "react-icons/gr";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handlePrevClick = () => {
    setIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return testimonials.length - 1; // Go to the last item if we're at the start
      } else {
        return prevIndex - 1; // Otherwise, just go to the previous item
      }
    });
  };
  
  const handleNextClick = () => {
    setIndex((prevIndex) => {
      if (prevIndex >= testimonials.length - 1) {
        return 0; // Wrap around to the start if we're at the end
      } else {
        return prevIndex + 1; // Otherwise, go to the next item
      }
    });
  };

  const review = testimonials[index];
  return (
    <div className="app__wrapper section__padding testimonials">
      <div className="app__wrapper_info testimonials_title">
        <p className="tagline">TESTIMONIALS</p>
        <h2 className="info-head title">What People Say About Us.</h2>
      </div>

      <div className="app__testimonials_info">
        <div className="testimonials_info-review">
          <img src={review.imgURL} alt="customer" className="customer-img" />
          <div className="scrollable-text">
          <p className="description" style={{ paddingTop: "1rem" }}>
            {review.review}
          </p>
         </div>
         
          <h4 className="name">{review.fullName}</h4>
          <p className="address">{review.address}</p>
        </div>

        <div className="testimonals_buttons">
          <GrPrevious
            size={24}
            onClick={handlePrevClick}
            className="rotate-icon"
          />
          <GrNext size={24} onClick={ handleNextClick} className="rotate-icon" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

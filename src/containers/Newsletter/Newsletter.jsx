import React from "react";
import './Newsletter.css';
import { newsIcon } from "../../assets";

const Newsletter = () => {
  return (
    <div className="section__margin app__newsletter">
        
        <div className="newsletter_icon">
            <img src={newsIcon} alt="newsletter icon" width={70} height={70} />
        </div>



      <div className="newsletter_info">
        <p>
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </p>
      </div>

    <div className="newsletter_input">
        <input type="email" name="" id="email-input" placeholder="Your Email Here" />
        <button type="button" className="subscribe-btn">Subscribe</button>
    </div>



    </div>
  );
};

export default Newsletter;

import React from "react";
import { footerLinks } from "../../constants";
import './Footer.css';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'
import { appStore, playStore } from "../../assets";

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="footer-main">
        <div className="footer-logo">
          <h4>Jadoo.</h4>
          <p>
            Book your trip in minutes. Get Full Control over your trip.
          </p>
        </div>

        <div className="footer-links">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

          <div className="socialMedia-links">
            <div className="social-icons">
               <div className="social-icon">
                <FaFacebookF fontSize={18} />
                </div>    

                <div className="social-icon">
                <FaInstagram fontSize={18} />
                </div>     

                <div className="social-icon">
                <FaTwitter fontSize={18} />
                </div>    
            </div>  

                <p>Discover Our App</p>

                <div className="social-icons">
                    <img src={playStore} alt="Play Store" width={107} height={35} />
                    <img src={appStore} alt="App Store" width={100} height={35} />
                </div>

            </div>          


      </div>

      <div className="footer-tail">
        <p>&copy; All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

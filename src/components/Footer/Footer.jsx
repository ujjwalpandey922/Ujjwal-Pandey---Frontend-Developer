import React from "react";
import img from "../../assets/2.webp";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer app__bg section__padding" id="footer">
      <div className="app__fotter-container">
        <div className="app__fotter-container-head">
          <a href="#"> <img src={img} alt="rocket" /></a>
        </div>
        <div className="app__fotter-container-list">
          <div className="app__fotter-container-list-link">
            <ul>
              <h5>Links</h5>
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="app__fotter-container-list-link">
            <ul>
              <h5>Company</h5>
              <li>Terms & Conditions</li>
              <li>Privacy Policy </li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="app__fotter-container-list-link">
            <ul>
              <h5>Get in touch</h5>
              <li>Crechterwoord K12 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>Counters</li>
              <li>info@payme.net</li>
            </ul>
          </div>
        </div>
      </div>
      <span>© 2022 SpaceX. All rights reserved.</span>
    </div>
  );
};

export default Footer;

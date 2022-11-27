import React from "react";
import img from "../../assets/2.webp";
import "./Header.css";

const Header = () => {
  return (
    <div className="app__header app__bg" id="#home">
      <div className="app__header-icon">
        <a href="#home">
          <img src={img} alt="rocket" />
        </a>
      </div>
      <div className="app__header-navlist">
        <ul className="app__header-navlist_content">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#search">Search</a>
          </li>
          <li>
            <a href="#capsule">Explore</a>
          </li>
          <li>
            <a href="#footer">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

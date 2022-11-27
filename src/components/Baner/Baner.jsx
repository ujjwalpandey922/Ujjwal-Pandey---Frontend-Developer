import React from "react";
import Rocket from "../../assets/Rocket.jpg";
import "./Baner.css";

const Baner = () => {
  return (
    <div className="app__baner section__padding app__image">
      <div className="app__baner-banerInfo">
        <h1> 🚀 SpaceX 🚀 </h1>
        <p>
          Doing something you wont get.Next Stop Mars.Twitter is a mess.
          Building rockets that probably wont reach anywhere but still we
          trying...XoXo
        </p>
      </div>
      <div className="app__baner-img">
        <img src={Rocket} alt="rocket" />
      </div>
    </div>
  );
};

export default Baner;

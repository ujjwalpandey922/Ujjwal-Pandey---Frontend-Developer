import React, { useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import "./Caspsule.css";

const CapsuleCard = ({ data }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="app__capsule">
        <div className="app__capsule-info">
          <h3>{data.serial}</h3>
          <h5>{data.status}</h5>
          <p>{data.type}</p>
        </div>
        <button
          type="button"
          className="custom__button"
          onClick={() => setToggle(true)}
        >
          See More
        </button>
        {toggle && (
          <div className="app__capsule-model slide-bottom">
            <GiCrossMark
              onClick={() => setToggle(false)}
              className=" app__capsule-model-cross"
            />

            <div className="app__capsule-model-head">
              <h3>{data.serial}</h3>
              <h5>{data.status}</h5>
              <p>{data.type}</p>
              <span>{data.id} </span>
            </div>
            <div className="app__capsule-model-details">
              <h2>
                🚀 reuse_count : <span>{data.reuse_count} </span>
              </h2>
              <h2>
                🚀 water_landings : <span>{data.water_landings} </span>
              </h2>
              <h2>
                🚀 land_landings : <span>{data.land_landings} </span>
              </h2>
              <h2>
                🚀 last_update : <span>{data.last_update} </span>
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CapsuleCard;

import React, { useState } from "react";
import { useCapsule } from "../../Context/Context";
import CapsuleCard from "../../Content/CapsuleCard";
import Pagination from "../../Content/Pagination";
import "./Rockets.css";

const Rockets = () => {
  const { data } = useCapsule();
  const [currentPage, setCurrentPage] = useState(1);
  const noOfElementsPerPage = 6;

  const lastPostNumber = currentPage * noOfElementsPerPage;
  const firstPostNumber = lastPostNumber - noOfElementsPerPage;
  const NewData = data.slice(firstPostNumber, lastPostNumber);

  return (
    <div className="app__rockets app__image section__padding" id="capsule">
      {data.length > 0 ? (
        <h1>Look at all these Capsules</h1>
      ) : (
        <h1>Sorry Found Nothing :/ ...Clear Search..Try Again</h1>
      )}
      <div className="app__rockets-content">
        {data
          ? NewData.map((capsule,i) => {
              return <CapsuleCard data={capsule} key={i}/>;
            })
          : null}
      </div>
      <Pagination
        noOfElementsPerPage={noOfElementsPerPage}
        data={data}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Rockets;

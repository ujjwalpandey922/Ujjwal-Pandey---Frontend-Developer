import React from "react";
import "./Pagination.css";

const Pagination = ({ data, noOfElementsPerPage, setCurrentPage }) => {
  let pages = [];
  for (
    let index = 1;
    index <= Math.ceil(data.length / noOfElementsPerPage);
    index++
  ) {
    pages.push(index);
  }

  return (
    <div className="pagination__keys">
      {pages.length > 0 &&
        pages.map((page) => (
          <button
            type="button"
            className="pagination__keys-button custom__button"
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}{" "}
          </button>
        ))}
    </div>
  );
};

export default Pagination;

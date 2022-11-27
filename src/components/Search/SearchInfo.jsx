import React, { useState } from "react";
import { useCapsule } from "../../Context/Context";
import "./SearchInfo.css";

const SearchInfo = () => {
  const { data, setData, getphp } = useCapsule();
  const [searchValues, setSearchValues] = useState({
    status: "retired",
    type: "Dragon 1.0",
    launches: 0,
  });

  const handleSearch = () => {
    const Newdata = data.filter((capsule) => {
      if (
        capsule.status === searchValues.status &&
        capsule.type === searchValues.type &&
        capsule.launches.length === parseInt(searchValues.launches)
      ) {
        return capsule;
      }
      console.log(capsule.launches.length, parseInt(searchValues.launches));
    });
    setData(Newdata);
  };
  const handleClearSearch = () => {
    getphp();
  };

  return (
    <div className="app__info section__padding app__bg" id="search">
      <div className="app__info-title">
        <h1>Search Any Capsules Here</h1>
      </div>
      <div className="app__info-filters">
        <h3>Status</h3>
        <select
          onChange={(e) =>
            setSearchValues({ ...searchValues, status: e.target.value })
          }
          value={searchValues.status}
        >
          <option value="retired">retired</option>
          <option value="unknown">unknown</option>
          <option value="active">active</option>
          <option value="destroyed">destroyed</option>
        </select>
        <h3>Type</h3>
        <select
          onChange={(e) =>
            setSearchValues({ ...searchValues, type: e.target.value })
          }
          value={searchValues.type}
        >
          <option value="Dragon 1.0">Dragon 1.0</option>
          <option value="Dragon 1.1">Dragon 1.1</option>
          <option value="Dragon 2.0">Dragon 2.0</option>
        </select>
        <h3>Launches</h3>
        <select
          onChange={(e) =>
            setSearchValues({ ...searchValues, launches: e.target.value })
          }
          value={searchValues.launches}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      <div className="custom__button-group">
        <button type="button" className="custom__button" onClick={handleSearch}>
          Search
        </button>
        <button
          type="button"
          className="custom__button"
          onClick={handleClearSearch}
        >
          Clear Search
        </button>
      </div>
    </div>
  );
};

export default SearchInfo;

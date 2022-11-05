import React, { useState } from "react";
import {
  JobSearch,
  LocationSearch,
  FullTime,
  SearchBtn,
  MobileFilter,
} from "./components";
import "./Filter.css";

const Filter = ({ filterJobs, hasFiltered, resetJobs }) => {
  const [counter, setCounter] = useState(1);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);

  const toggleFilterOptions = () => {
    if (counter === 3) {
      setCounter(1);
    } else {
      setCounter(counter + 1);
    }
  };

  const getSearchParams = () => {
    let params = {
      title,
      location,
      fullTime,
    };

    console.log(params);
    filterJobs(params);
    setTitle("");
    setLocation("");
    setFullTime(false);
  };
  return (
    <div className="filter-row-parent">
      {hasFiltered && (
        <button onClick={resetJobs} className="reset">
          ⟲
        </button>
      )}
      <div className="desktop-filter">
        <div className="filter-col">
          <JobSearch title={title} setTitle={setTitle} />
        </div>
        <div className="filter-col">
          <LocationSearch location={location} setLocation={setLocation} />
        </div>
        <div className="filter-col">
          <FullTime fullTime={fullTime} setFullTime={setFullTime} />
          <SearchBtn getSearchParams={getSearchParams} />
        </div>
      </div>
      <div className="mobile-filter">
        <MobileFilter
          location={location}
          setLocation={setLocation}
          title={title}
          setTitle={setTitle}
          fullTime={fullTime}
          setFullTime={setFullTime}
          toggleFilterOptions={toggleFilterOptions}
          counter={counter}
        />

        <button onClick={getSearchParams} className="mobile-search-btn">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
              fill="white"
              fillRule="nonzero"
            />
          </svg>{" "}
        </button>
      </div>
    </div>
  );
};

export default Filter;

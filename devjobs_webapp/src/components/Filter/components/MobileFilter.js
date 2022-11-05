import React, { useState } from "react";

const MobileFilter = ({
  title,
  setTitle,
  location,
  setLocation,
  fullTime,
  setFullTime,
  counter,
  toggleFilterOptions,
}) => {
  switch (counter) {
    case 1:
      return (
        <div className="mobile-filter-row">
          <input
            type="text"
            className="title-mobile-input"
            placeholder="Filter by title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="mobile-filter-btn" onClick={toggleFilterOptions}>
            <img src="./assets/mobile/icon-filter.svg" alt="" />
          </button>
        </div>
      );

    case 2:
      return (
        <div className="mobile-filter-row">
          <input
            type="text"
            className="location-mobile-input"
            placeholder="Filter by location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="mobile-filter-btn" onClick={toggleFilterOptions}>
            <img src="./assets/mobile/icon-filter.svg" alt="" />
          </button>
        </div>
      );

    case 3:
      return (
        <div className="mobile-filter-row">
          <label htmlFor="fullTime">
            <strong>Full Time:</strong>
          </label>
          <input
            type="checkbox"
            className="fulltime-mobile-input"
            placeholder="Filter by title..."
            value={fullTime}
            onChange={(e) => setFullTime((fullTime = !fullTime))}
          />
          <button
            className="mobile-filter-btn overrule-transform"
            onClick={toggleFilterOptions}
          >
            <img src="./assets/mobile/icon-filter.svg" alt="" />
          </button>
        </div>
      );
  }
};

export default MobileFilter;

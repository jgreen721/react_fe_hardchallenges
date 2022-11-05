import React, { useState } from "react";

const LocationSearch = ({ location, setLocation }) => {
  // const [location, setLocation] = useState(false);
  return (
    <div className="location-search-parent">
      <img
        className="location-icon"
        src="./assets/desktop/icon-location.svg"
        alt=""
      />
      <input
        type="text"
        name="location"
        className="location-input"
        placeholder="Filter by location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
  );
};

export default LocationSearch;

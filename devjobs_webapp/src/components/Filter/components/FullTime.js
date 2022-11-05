import React from "react";

const FullTime = ({ fullTime, setFullTime }) => {
  return (
    <div className="fulltime-parent">
      <input
        type="checkbox"
        name="fulltime"
        onClick={() => setFullTime(!fullTime)}
        className="fulltime-toggle"
      />
      <label htmlFor="fulltime">
        <strong>
          Full Time <span className="tablet-only">Only</span>
        </strong>
      </label>
    </div>
  );
};

export default FullTime;

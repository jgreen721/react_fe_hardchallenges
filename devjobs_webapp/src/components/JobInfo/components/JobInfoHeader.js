import React from "react";

const JobInfoHeader = ({ job }) => {
  return (
    <div className="jobinfo-header-row">
      <div
        style={{ backgroundColor: job.logoBackground }}
        className="jobinfo-logo-col"
      >
        <img src={job.logo} alt="" />
      </div>
      <div className="jobinfo-large-header-col">
        <div>
          <h3 className="jobinfo-company">{job.company}</h3>
          <h4 className="jobinfo-site">{job.website}</h4>
        </div>
        <a href={job.website} target="_blank" className="companysite-btn">
          Company Site
        </a>
      </div>
    </div>
  );
};

export default JobInfoHeader;

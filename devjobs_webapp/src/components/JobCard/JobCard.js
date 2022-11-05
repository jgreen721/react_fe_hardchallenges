import React from "react";
import "./JobCard.css";

const JobCard = ({ job, selectJob }) => {
  return (
    <div onClick={() => selectJob(job)} className="job-card">
      <div style={{ background: job.logoBackground }} className="logo-div">
        <img className="job-logo" src={job.logo} alt="logo" />
      </div>
      <div className="top-job-row">
        <h5 className="posted-at small-job-detail">{job.postedAt}</h5>
        <h5 className="seperator">.</h5>
        <h5 className="posted-at small-job-detail">{job.contract}</h5>
      </div>
      <h3 className="job-title">{job.position}</h3>
      <h5 className="job-company">{job.company}</h5>
      <h5 className="job-location">{job.location}</h5>
    </div>
  );
};

export default JobCard;

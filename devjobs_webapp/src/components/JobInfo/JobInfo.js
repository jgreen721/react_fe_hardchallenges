import React from "react";
import { JobInfoHeader, JobInfoBody } from "./components";
import "./JobInfo.css";
const JobInfo = ({ job }) => {
  return (
    <div className="job-content-parent">
      <JobInfoHeader job={job} />
      <JobInfoBody job={job} />
      <div className="bottom-info-row">
        <div className="bottom-col">
          <h3 className="bold">{job.position}</h3>
          <h4 style={{ fontWeight: 300 }}>{job.company}</h4>
        </div>
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default JobInfo;

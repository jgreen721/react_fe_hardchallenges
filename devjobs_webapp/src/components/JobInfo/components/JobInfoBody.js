import React from "react";

const JobInfoBody = ({ job }) => {
  return (
    <div className="jobinfo-body">
      <div className="jobinfo-top-row">
        <div className="job-info-col">
          <div className="info-row">
            <h5 className="top-details-h5">{job.postedAt}</h5>
            <span className="seperator">.</span>
            <h5 className="top-details-h5">{job.contract}</h5>
          </div>
          <h2 className="jobbody-title">{job.position}</h2>
          <div className="small-details-h5 location-h5">{job.location}</div>
        </div>
        <div className="job-info-col">
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>

      <p className="blurb-p lorem-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et
        quibusdam aliquid ullam aperiam quasi odio velit, excepturi dolor labore
        fuga vero iusto possimus magni. Accusamus, voluptatem libero ipsa
        tempore molestias harum in est impedit aperiam dolore obcaecati, natus,
        eaque laboriosam voluptate alias! Expedita, nam. Provident fugit sit
        dolorem atque reiciendis excepturi laborum velit fuga? Nihil praesentium
        suscipit maxime. Eveniet, obcaecati at. Voluptatibus excepturi pariatur
        libero provident officia, rerum cupiditate ab eos autem eveniet quod
        possimus nulla non obcaecati assumenda repellat sed ducimus saepe
        aliquid architecto accusamus sapiente quis harum sit!
      </p>

      <h4 className="requirements-title job-header-title">Requirements</h4>

      <p className="blurb-p requirments-p">{job.requirements.content}</p>
      <ul className="requirements-list">
        {job.requirements.items.map((j) => (
          <li className="requirement-item" key={j}>
            {j}
          </li>
        ))}
      </ul>

      <h4 className="job-header-title">What you Will Do</h4>
      <p className="blurb-p">{job.role.content}</p>
      <ul className="responsiblities-list">
        {job.role.items.map((j, idx) => (
          <li key={j} className="responsibility-item">
            <span className="bold">{idx + 1}</span>
            {j}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobInfoBody;

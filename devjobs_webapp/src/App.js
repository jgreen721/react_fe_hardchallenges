import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { Header, Filter, JobCard, JobInfo } from "./components";

function App() {
  const [toggleTheme, setToggleTheme] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [hasFiltered, setHasFiltered] = useState(false);
  const [currJob, setCurrJob] = useState({});
  const [isBatchOne, setIsBatchOne] = useState(true);
  const jobsRef = useRef();
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    let response = await fetch("data.json");
    let data = await response.json();

    console.log("Data", data);
    jobsRef.current = data;
    setJobs(data);
  };

  const filterJobs = (params) => {
    console.log("Params", params);
    let temp = jobsRef.current;
    if (params.title.length) {
      temp = temp.filter((t) => {
        console.log(t.position, params.title);
        return (
          t.position.toLowerCase() == params.title.toLowerCase() ||
          t.contract.toLowerCase() == params.title.toLowerCase() ||
          params.title.toLowerCase() == t.company.toLowerCase()
        );
      });
    }

    if (params.location.length) {
      temp = temp.filter(
        (t) => t.location.toLowerCase() === params.location.toLowerCase()
      );
    }

    if (params.fullTime) {
      temp = temp.filter((t) => t.contract === "Full Time");
    }
    if (temp.length < 15) setHasFiltered(true);
    setJobs(temp);
  };

  const resetJobs = async () => {
    setJobs(jobsRef.current);
    setHasFiltered(false);
  };

  const selectJob = (job) => {
    setCurrJob(job);
  };

  const clearCurrentJob = (e) => {
    console.log(e.target);
    if (
      e.target.classList.contains("app") ||
      e.target.classList.contains("header-content")
    ) {
      setCurrJob({});
    }
  };

  return (
    <div
      onClick={(e) => clearCurrentJob(e)}
      className="app"
      data-theme={toggleTheme ? "light" : "dark"}
    >
      <Header toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />
      {currJob?.contract ? (
        <JobInfo job={currJob} />
      ) : (
        <div className="app-content-parent">
          <Filter
            resetJobs={resetJobs}
            hasFiltered={hasFiltered}
            filterJobs={filterJobs}
          />
          <div className="jobs-container">
            {isBatchOne
              ? jobs
                  .slice(0, 9)
                  .map((j) => (
                    <JobCard selectJob={selectJob} job={j} key={j.id} />
                  ))
              : jobs
                  .slice(9, jobs.length - 1)
                  .map((j) => (
                    <JobCard selectJob={selectJob} job={j} key={j.id} />
                  ))}
          </div>
          <div className="load-btn-div">
            <button
              className="load-btn"
              onClick={() => setIsBatchOne(!isBatchOne)}
            >
              {isBatchOne ? "Load More" : "Previous"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
/* import { Info } from "../components/Info"; */

const HomePage = () => {
  const history = useHistory();

  return (
    <>
      <div className="page">HomePage</div>
      <Link to="/setup">Go to SetUp</Link>
      <h3>Routes for mobile pages:</h3>
      <Link to="/overview">Go to Overview</Link>
      <br></br>
      <Link to="/roll">Go to Roll</Link>
      <h3>Routes for desktop pages:</h3>
      <Link to="/dashboard">Go to Dashboard</Link>
      <h2>Start the App:</h2>
      <button onClick={() => history.push("/setup")}>START</button>
    </>
  );
};

export default HomePage;

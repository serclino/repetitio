import React from "react";
import { useHistory } from "react-router-dom";
import { Singleton } from "../components/Singleton";
import { ListsOverview } from "../components/ListsOverview";
import { Counter } from "../components/Counter";
import { Info } from "../components/Info";

const OverviewPage = () => {
  const history = useHistory();

  return (
    <>
      <div className="page">OverviewPage</div>
      <Singleton />
      <Counter />
      <ListsOverview />
      <button onClick={() => history.push("/roll")}>Let's study!</button>
    </>
  );
};

export default OverviewPage;

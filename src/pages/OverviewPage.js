import React from "react";
import { Singleton } from "../components/Singleton";
import { ListsOverview } from "../components/ListsOverview";
import { Counter } from "../components/Counter";
import { Info } from "../components/Info";

const OverviewPage = () => {
  return (
    <>
      <div className="page">OverviewPage</div>
      <Singleton />
      <Counter />
      <ListsOverview />
    </>
  );
};

export default OverviewPage;

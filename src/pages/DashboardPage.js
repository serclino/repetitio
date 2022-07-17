import React from "react";
import { Singleton } from "../components/Singleton";
import { ListsOverview } from "../components/ListsOverview";
import { Counter } from "../components/Counter";
import { JustRolled } from "../components/JustRolled";
import { RollButton } from "../components/RollButton";
import { NextSteps } from "../components/NextSteps";

const DashboardPage = () => {
  return (
    <>
      <div className="page">DashboardPage</div>
      <RollButton />
      <JustRolled />
      <Counter />
      <NextSteps />
      <ListsOverview />
    </>
  );
};

export default DashboardPage;

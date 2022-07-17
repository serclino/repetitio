import React from "react";
import { Singleton } from "../components/Singleton";
import { ListsOverview } from "../components/ListsOverview";
import { Counter } from "../components/Counter";
import { JustRolled } from "../components/JustRolled";
import { RollButton } from "../components/RollButton";
import { NextSteps } from "../components/NextSteps";
import { useSelector } from "react-redux";
import { selectMainList } from "../features/listsSlice";

const DashboardPage = () => {
  const mainList = useSelector(selectMainList);

  return (
    <>
      <div className="page">DashboardPage</div>
      {mainList.length > 0 ? <RollButton /> : null}
      <JustRolled />
      <Counter />
      {mainList.length === 0 ? <NextSteps /> : null}
      <ListsOverview />
    </>
  );
};

export default DashboardPage;

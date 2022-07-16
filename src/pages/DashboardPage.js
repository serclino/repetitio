import React from "react";
import { Singleton } from "../components/Singleton";
import { ListsOverview } from "../components/ListsOverview";
import { Counter } from "../components/Counter";
import { RollComponent } from "../components/RollComponent";
import { RollButton } from "../components/RollButton";

const DashboardPage = () => {
  return (
    <>
      <div>DashboardPage</div>
      <ListsOverview />
    </>
  );
};

export default DashboardPage;

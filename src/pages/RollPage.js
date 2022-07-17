import React from "react";
import { useSelector } from "react-redux";
import { selectMainList } from "../features/listsSlice";
import { Counter } from "../components/Counter";
import { JustRolled } from "../components/JustRolled";
import { RollButton } from "../components/RollButton";
import { Info } from "../components/Info";
import { NextSteps } from "../components/NextSteps";
import { BackButton } from "../components/BackButton";

const RollPage = () => {
  const mainList = useSelector(selectMainList);
  return (
    <>
      <BackButton path='/overview' />
      <div className="page">RollPage</div>
      {mainList.length > 0 ? <RollButton /> : null}
      <JustRolled />
      <Counter />
      {mainList.length === 0 ? <NextSteps /> : null}
    </>
  );
};

export default RollPage;

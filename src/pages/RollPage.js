import React from "react";
import { Counter } from "../components/Counter";
import { JustRolled } from "../components/JustRolled";
import { RollButton } from "../components/RollButton";
import { Info } from "../components/Info";
import { NextSteps } from "../components/NextSteps";

const RollPage = () => {
  return (
    <>
      <div className="page">RollPage</div>
      <RollButton />
      <JustRolled />
      <Counter />
      <NextSteps />
    </>
  );
};

export default RollPage;

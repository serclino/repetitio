import React from "react";
import { useSelector } from "react-redux";
import { selectMainList } from "../features/listsSlice";
import { Counter } from "../components/Counter";
import { JustRolled } from "../components/JustRolled";
import { RollButton } from "../components/RollButton";
import { NextSteps } from "../components/NextSteps";
import { BackButton } from "../components/BackButton";

import style from "../styles/pages/RollPage.module.css";
import logo from "../resources/logo/logo@3x.png";
import cgImg from "../resources/end-state/undraw_super_thank_you_re_f8bo@3x.png";

const RollPage = () => {
  const mainList = useSelector(selectMainList);
  return (
    <section className={style.page}>
      <div className={style.top}>
        <BackButton path="/overview" text="List overview" />
        <img src={logo} alt="logo" />
      </div>

      <JustRolled />
      <Counter />
      {mainList.length > 0 && <RollButton />}
      {mainList.length === 0 && <NextSteps />}
    </section>
  );
};

export default RollPage;

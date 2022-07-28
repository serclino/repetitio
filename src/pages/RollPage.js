import React from "react";
import { Counter } from "../components/Counter";
import { JustRolled } from "../components/JustRolled";
import { RollButton } from "../components/RollButton";
import { BackButton } from "../components/BackButton";

import style from "../styles/pages/RollPage.module.css";
import logo from "../resources/logo/logo@3x.png";

const RollPage = () => {

  return (
    <section className={style.rollPage}>
      <div className={style.top}>
        <BackButton path="/overview" text="List overview" />
        <img src={logo} alt="logo" />
      </div>
      <JustRolled />
      <div className={style.counterAndBtn}>
        <Counter />
        <RollButton />
      </div>
    </section>
  );
};

export default RollPage;

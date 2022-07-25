import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectMainList } from "../features/listsSlice";
import { Counter } from "../components/Counter";
import { JustRolled } from "../components/JustRolled";
import { RollButton } from "../components/RollButton";
import { BackButton } from "../components/BackButton";

import style from "../styles/pages/RollPage.module.css";
import logo from "../resources/logo/logo@3x.png";

const RollPage = () => {
  const history = useHistory();
  const mainList = useSelector(selectMainList);
  return (
    <section className={style.page}>
      <div className={style.top}>
        <BackButton path="/overview" text="List overview" />
        <img src={logo} alt="logo" />
      </div>
      <div className={style.bottom}>
        <JustRolled />
        <Counter />
        {mainList.length > 0 && (
          <button
            className={style.backToOverview}
            onClick={() => history.push("/overview")}
          >
            List overview
          </button>
        )}
        <RollButton />
        {mainList.length === 0 && (
          <div className={style.cg}>
            <h1>Kudos! 🥳</h1>
            <p>You just finished your revision.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RollPage;

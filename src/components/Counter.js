import React from "react";
import { useSelector } from "react-redux";
import {
  selectMainList,
  selectRolledList,
  selectMistakesList,
} from "../features/listsSlice";

import style from "../styles/components/Counter.module.css";

export const Counter = () => {
  const mainList = useSelector(selectMainList);
  const rolledList = useSelector(selectRolledList);
  const mistakesList = useSelector(selectMistakesList);

  return (
    <section className={style.counter}>
      <div className={style.box}>
        <h2>{mainList.length}</h2>
        <p>Remaining</p>
      </div>
      <div className={style.stripe}></div>
      <div className={style.box}>
        <h2>{rolledList.length}</h2>
        <p>Done</p>
      </div>
      <div className={style.stripe}></div>
      <div className={style.box}>
        <h2>{mistakesList.length}</h2>
        <p>Mistakes</p>
      </div>
    </section>
  );
};

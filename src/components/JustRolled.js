import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRolledList,
  selectMistakesList,
  toggleMistake,
} from "../features/listsSlice";
import style from "../styles/components/JustRolled.module.css";

import markMistake from "../resources/markMistake.svg";
import unmarkMistake from "../resources/unmarkMistake.svg";

export const JustRolled = () => {
  const dispatch = useDispatch();
  const rolledList = useSelector(selectRolledList);
  const mistakesList = useSelector(selectMistakesList);
  const rolledNum = rolledList[rolledList.length - 1]?.number;

  const btn = (
    <button
      className={style.btn}
      onClick={() => dispatch(toggleMistake({ rolledNum }))}
    >
      {mistakesList[mistakesList.length - 1]?.number !== rolledNum ? (
        <div>
          <p>Mark Mistake</p> <img src={markMistake} alt="mark mistake" />
        </div>
      ) : (
        <div className={style.unmark}>
          <p>Unmark Mistake</p> <img src={unmarkMistake} alt="unmark mistake" />
        </div>
      )}
    </button>
  );

  return (
    <section className={style.justRolled}>
      {rolledList.length > 0 ? (
        <p className={style.text}>Rolled question</p>
      ) : (
        <p className={style.letsRoll}>Let's roll!</p>
      )}
      <h1 className={style.bigNum}>{rolledNum}</h1>
      {rolledList.length > 0 && btn}
    </section>
  );
};

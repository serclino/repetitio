import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectMainList,
  selectRolledList,
  selectMistakesList,
} from "../features/listsSlice";
import style from "../styles/components/ListsOverview.module.css";
import toggleArrow from "../resources/toggle-arrow/fi-rr-angle-small-right@3x.png";

export const ListsOverview = () => {
  const mainList = useSelector(selectMainList);
  const rolledList = useSelector(selectRolledList);
  const mistakesList = useSelector(selectMistakesList);
  const [showRemaining, setShowRemaining] = useState(true);
  const [showDone, setShowDone] = useState(true);
  const [showMistakes, setShowMistakes] = useState(true);

  return (
    <div className={style.scrollable}>
      {/* remaining list */}
      <section className={style.topOverview}>
        <h1>
          Remaining <span>{`(${mainList.length})`}</span>
        </h1>
        <button
          onClick={() => setShowRemaining((prev) => !prev)}
          className={`${style.arrowBtn} ${
            !showRemaining ? style.arrowDown : ""
          }`}
        >
          <img src={toggleArrow} alt="toggle arrow" />
        </button>
      </section>
      {showRemaining && (
        <div className={style.listedNums}>
          {mainList.map((num, id) => (
            <div className={`numero ${num.css}`} key={id}>
              {num.number}
            </div>
          ))}
        </div>
      )}
      {/* done list */}
      <section className={style.topOverview}>
        <h1>
          Done <span>{`(${rolledList.length})`}</span>
        </h1>
        <button
          onClick={() => setShowDone((prev) => !prev)}
          className={`${style.arrowBtn} ${!showDone ? style.arrowDown : ""}`}
        >
          <img src={toggleArrow} alt="toggle arrow" />
        </button>
      </section>
      {showDone && (
        <div className={style.listedNums}>
          {rolledList.map((num, id) => (
            <div className={`numero ${num.css}`} key={id}>
              {num.number}
            </div>
          ))}
        </div>
      )}
      {/* mistakes list */}
      <section className={style.topOverview}>
        <h1>
          Mistakes <span>{`(${mistakesList.length})`}</span>
        </h1>
        <button
          onClick={() => setShowMistakes((prev) => !prev)}
          className={`${style.arrowBtn} ${
            !showMistakes ? style.arrowDown : ""
          }`}
        >
          <img src={toggleArrow} alt="toggle arrow" />
        </button>
      </section>
      {showMistakes && (
        <div className={style.listedNums}>
          {mistakesList.map((num, id) => (
            <div className={`numero ${num.css}`} key={id}>
              {num.number}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

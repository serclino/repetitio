import React, { useEffect, useState } from "react";
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
  const [showRemaining, setShowRemaining] = useState(
    mainList.length === 0 ? false : true
  );
  const [showDone, setShowDone] = useState({
    state: rolledList.length === 0 ? false : true,
    userInteracted: false,
  });
  const [showMistakes, setShowMistakes] = useState({
    state: mistakesList.length === 0 ? false : true,
    userInteracted: false,
  });

  useEffect(() => {
    if (mainList.length === 0) {
      setShowRemaining(false);
    }
    if (rolledList.length === 1 && showDone.userInteracted === false) {
      setShowDone((prev) => ({
        ...prev,
        state: true,
      }));
    }
    if (mistakesList.length === 1 && showMistakes.userInteracted === false) {
      setShowMistakes((prev) => ({
        ...prev,
        state: true,
      }));
    }
  }, [mainList, rolledList, mistakesList, showDone.userInteracted, showMistakes.userInteracted]);

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
          onClick={() =>
            setShowDone((prev) => ({
              state: !prev.state,
              userInteracted: true,
            }))
          }
          className={`${style.arrowBtn} ${!showDone.state && style.arrowDown}`}
        >
          <img src={toggleArrow} alt="toggle arrow" />
        </button>
      </section>
      {showDone?.state && (
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
          onClick={() =>
            setShowMistakes((prev) => ({
              state: !prev.state,
              userInteracted: true,
            }))
          }
          className={`${style.arrowBtn} ${
            !showMistakes.state && style.arrowDown
          }`}
        >
          <img src={toggleArrow} alt="toggle arrow" />
        </button>
      </section>
      {showMistakes.state && (
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

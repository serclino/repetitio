import React from "react";
import { useSelector } from "react-redux";
import { selectMainList, selectRolledList, selectMistakesList } from "../features/listsSlice";
import style from '../styles/components/ListsOverview.module.css';
import toggleArrow from "../resources/toggle-arrow/fi-rr-angle-small-right@3x.png";

export const ListsOverview = () => {
  const mainList = useSelector(selectMainList);
  const rolledList = useSelector(selectRolledList);
  const mistakesList = useSelector(selectMistakesList);

  return (
    <>
      <div className={style.topOverview}>
        <h1>
          Remaining <span>{`(${mainList.length})`}</span>
        </h1>
        <img src={toggleArrow} alt="toggle arrow" />
      </div>
      {mainList.map((num, id) => (
        <p className={`numero ${num.css}`} key={id}>
          {num.number}
        </p>
      ))}
      <div className={style.topOverview}>
        <h1>
          Done <span>{`(${rolledList.length})`}</span>
        </h1>
        <img src={toggleArrow} alt="toggle arrow" />
      </div>
      {rolledList.map((num, id) => (
        <p className={`numero ${num.css}`} key={id}>
          {num.number}
        </p>
      ))}
      <div className={style.topOverview}>
        <h1>
          Mistakes <span>{`(${mistakesList.length})`}</span>
        </h1>
        <img src={toggleArrow} alt="toggle arrow" />
      </div>
      {mistakesList.map((num, id) => (
        <p className={`numero ${num.css}`} key={id}>
          {num.number}
        </p>
      ))}
    </>
  );
};

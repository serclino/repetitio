import React from "react";
import { useSelector } from "react-redux";
import {
  selectMainList,
  selectRolledList,
  selectMistakesList,
} from "../features/listsSlice";

export const Counter = () => {
  const mainList = useSelector(selectMainList);
  const rolledList = useSelector(selectRolledList);
  const mistakesList = useSelector(selectMistakesList);

  return (
    <>
      <div className="component">Counter</div>
      <p>{mainList.length} Remaining</p>
      <p>{rolledList.length} Done</p>
      <p>{mistakesList.length} Mistakes</p>
    </>
  );
};

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRolledList,
  selectMistakesList,
  toggleMistake,
} from "../features/listsSlice";

export const JustRolled = () => {
  const dispatch = useDispatch();
  const rolledList = useSelector(selectRolledList);
  const mistakesList = useSelector(selectMistakesList);
  const rolledNum = rolledList[rolledList.length - 1];

  return (
    <>
      <div className="component">JustRolled</div>
      <p>{rolledNum}</p>
      <button onClick={() => dispatch(toggleMistake({ rolledNum }))}>
        {!mistakesList.includes(rolledNum)
          ? "Mark as Mistake"
          : "Unmark from Mistakes"}
      </button>
    </>
  );
};

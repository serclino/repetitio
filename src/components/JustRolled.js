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
  const rolledNum = rolledList[rolledList.length - 1]?.number;

  const btn = (
    <button onClick={() => dispatch(toggleMistake({ rolledNum }))}>
      {mistakesList[mistakesList.length - 1]?.number !== rolledNum
        ? "Mark Mistake"
        : "Unmark Mistake"}
    </button>
  );

  return (
    <>
      <div className="component">JustRolled</div>
      <p>{rolledNum}</p>
      {rolledList.length > 0 ? btn : null}
    </>
  );
};

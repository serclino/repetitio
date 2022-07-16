import React from "react";
import { useSelector } from "react-redux";
import { selectRolledList } from "../features/listsSlice";

export const JustRolled = () => {
  const rolledList = useSelector(selectRolledList);
  const rolledNum = rolledList[rolledList.length - 1];

  return (
    <>
      <div className="component">JustRolled</div>
      <p>{rolledNum}</p>
    </>
  );
};

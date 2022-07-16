import React from "react";
import { useSelector } from "react-redux";
import { selectMainList, selectRolledList } from "../features/listsSlice";

export const ListsOverview = () => {
  const mainList = useSelector(selectMainList);
  const rolledList = useSelector(selectRolledList);

  return (
    <>
      <div className="component">ListsOverview</div>
      <h5>Main List:</h5>
      {mainList.map((num, id) => (
        <p key={id}>{num}</p>
      ))}
      <h5>Rolled List:</h5>
      {rolledList.map((num,id) => (
        <p key={id}>{num}</p>
      ))}
    </>
  );
};

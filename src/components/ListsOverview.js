import React from "react";
import { useSelector } from "react-redux";
import { selectMainList, selectRolledList, selectMistakesList } from "../features/listsSlice";

export const ListsOverview = () => {
  const mainList = useSelector(selectMainList);
  const rolledList = useSelector(selectRolledList);
  const mistakesList = useSelector(selectMistakesList);

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
      <h5>Mistakes List:</h5>
      {mistakesList.map((num, id) => (
        <p key={id}>{num}</p>
      ))}
    </>
  );
};

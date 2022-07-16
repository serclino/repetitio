import React from "react";
import { useSelector } from "react-redux";
import { selectMainList } from "../features/listsSlice";

export const ListsOverview = () => {
  const mainList = useSelector(selectMainList);

  return (
    <>
      <div>ListsOverview</div>
      <h5>Main List:</h5>
      {mainList.map((num, id) => (
        <p key={id}>{num}</p>
      ))}
    </>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import { generateNewListFromMistakes } from "../features/listsSlice";

export const NextSteps = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="component">NextSteps</div>
      <button onClick={() => dispatch(generateNewListFromMistakes())}>
        Create a new list from mistakes.
      </button>
    </>
  );
};

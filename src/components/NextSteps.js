import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  generateNewListFromMistakes,
  selectMistakesList,
} from "../features/listsSlice";

export const NextSteps = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const mistakesList = useSelector(selectMistakesList);

  return (
    <>
      <div className="component">NextSteps</div>
      <button onClick={() => history.push("/setup")}>Create a new list.</button>
      <br />
      {mistakesList.length > 0 ? (
        <button onClick={() => dispatch(generateNewListFromMistakes())}>
          Create a new list from mistakes.
        </button>
      ) : null}
    </>
  );
};

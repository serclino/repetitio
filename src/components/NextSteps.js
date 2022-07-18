import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  generateNewListFromMistakes,
  resetAllLists,
  selectMistakesList,
} from "../features/listsSlice";

export const NextSteps = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const mistakesList = useSelector(selectMistakesList);

  return (
    <>
      <div className="component">NextSteps</div>
      <h4>Kudos! 🥳 Your list is empty. What's next?</h4>
      <button
        onClick={() => {
          dispatch(resetAllLists());
          history.push("/");
        }}
      >
        Back to Home.
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(resetAllLists());
          history.push("/setup");
        }}
      >
        Create a new list.
      </button>
      <br />
      {mistakesList.length > 0 ? (
        <button
          onClick={() => {
            dispatch(generateNewListFromMistakes());
            history.push("/overview");
          }}
        >
          Create a new list from mistakes.
        </button>
      ) : null}
    </>
  );
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { displayAlert, removeAlert } from "../features/alertSlice";
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
          dispatch(removeAlert()); // to handle very rare situation
          // in which alert state has some msg
          // and this msg would appear in the /setup page
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
            dispatch(
              displayAlert({
                type: "success",
                msg: "List has been successfully created!",
              })
            );
            history.push("/overview");
          }}
        >
          Create a new list from mistakes.
        </button>
      ) : null}
    </>
  );
};

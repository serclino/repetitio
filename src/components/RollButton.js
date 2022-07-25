import React from "react";
import { rollDice } from "../features/listsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  generateNewListFromMistakes,
  selectMainList,
  selectMistakesList,
  resetAllLists,
} from "../features/listsSlice";
import { displayAlert, removeAlert } from "../features/alertSlice";

import style from "../styles/components/RollButton.module.css";

export const RollButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const mainList = useSelector(selectMainList);
  const mistakesList = useSelector(selectMistakesList);

  return (
    <>
      {mainList.length > 0 ? (
        <button
          className={`${style.btn} ${style.roll}`}
          onClick={() => dispatch(rollDice())}
        >
          Roll a dice
        </button>
      ) : (
        <section>
          <div className={style.container}>
            {mistakesList.length > 0 && (
              <button
                className={`${style.btn} ${style.createFromMistakes}`}
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
                New list from mistakes
              </button>
            )}
          </div>

          <button
            className={`${style.btn} ${style.createNew}`}
            onClick={() => {
              dispatch(resetAllLists());
              dispatch(removeAlert()); // to handle very rare situation
              // in which alert state has some msg
              // and this msg would appear in the /setup page
              history.push("/setup");
            }}
          >
            Create a new list
          </button>
        </section>
      )}
    </>
  );
};

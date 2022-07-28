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
        <div className={style.btnsContainer}>
          <button
            className={`${style.btn} ${style.greenBtn}`}
            onClick={() => dispatch(rollDice())}
          >
            Roll a dice
          </button>
        </div>
      ) : (
        <div className={style.btnsContainer}>
          <button className={`${style.btn} ${style.noBgBtn}`}>
            Back to Homepage
          </button>
          <button className={`${style.btn} ${style.lightGreenBtn}`}>
            Create a new list
          </button>
          {mistakesList.length > 0 && (
            <button className={`${style.btn} ${style.greenBtn}`}>
              New list from mistakes
            </button>
          )}
        </div>
      )}
    </>
  );
};

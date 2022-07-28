import React, { useState } from "react";
import { rollDice } from "../features/listsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMainList,
  selectMistakesList,
} from "../features/listsSlice";
import { PopUp } from "./PopUp";

import style from "../styles/components/RollButton.module.css";

export const RollButton = () => {
  const dispatch = useDispatch();
  const mainList = useSelector(selectMainList);
  const mistakesList = useSelector(selectMistakesList);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [typeOfPopup, setTypeOfPopup] = useState("");

  // popup when user wants to navigate back
  const openPopUp = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <>
      {isPopupOpen && (
        <PopUp setIsPopupOpen={setIsPopupOpen} type={typeOfPopup} />
      )}
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
          <button
            className={`${style.btn} ${style.noBgBtn}`}
            onClick={(e) => {
              setTypeOfPopup("home");
              openPopUp(e);
            }}
          >
            Back to Homepage
          </button>
          <button
            className={`${style.btn} ${style.lightGreenBtn}`}
            onClick={(e) => {
              setTypeOfPopup("new");
              openPopUp(e);
            }}
          >
            Create a new list
          </button>
          {mistakesList.length > 0 && (
            <button
              className={`${style.btn} ${style.greenBtn}`}
              onClick={(e) => {
                setTypeOfPopup("mistakes");
                openPopUp(e);
              }}
            >
              New list from mistakes
            </button>
          )}
        </div>
      )}
    </>
  );
};

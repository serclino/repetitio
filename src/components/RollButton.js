import React from "react";
import { rollDice } from "../features/listsSlice";
import { useDispatch } from "react-redux";

import style from "../styles/components/RollButton.module.css";

export const RollButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button className={style.btn} onClick={() => dispatch(rollDice())}>
        Roll a dice
      </button>
    </>
  );
};

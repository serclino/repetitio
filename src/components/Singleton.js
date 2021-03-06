import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addIndividualNum,
  selectMainList,
  selectRolledList,
} from "../features/listsSlice";
import { displayAlert } from "../features/alertSlice";
import style from "../styles/components/Singleton.module.css";

import plus from "../resources/plus.svg";

export const Singleton = () => {
  const [individualNum, setIndividualNum] = useState("");
  const dispatch = useDispatch();
  const mainList = useSelector(selectMainList);
  const rolledList = useSelector(selectRolledList);

  const addNumberToTheList = (e) => {
    e.preventDefault();
    // to check if individual number is already in the lists:
    let isIndNumInTheList = false;
    mainList.forEach((item) => {
      if (item.number === individualNum) {
        isIndNumInTheList = true;
      }
    });
    rolledList.forEach((item) => {
      if (item.number === individualNum) {
        isIndNumInTheList = true;
      }
    });
    if (isIndNumInTheList === true) {
      dispatch(
        displayAlert({
          type: "danger",
          msg: `Number ${individualNum} is already in the list.`,
        })
      );
      return;
    }
    // to check if user typed in correct value (number):
    if (individualNum === "") {
      dispatch(
        displayAlert({
          type: "danger",
          msg: "Please enter valid number value.",
        })
      );
      return;
    }
    // to check if user typed number in desired range:
    if (individualNum < 1 || individualNum > 200) {
      dispatch(
        displayAlert({
          type: "danger",
          msg: "The number must be in range from 1 to 200.",
        })
      );
      return;
    }
    // if everything is ok, finally dispatch individual number to the store:
    dispatch(addIndividualNum({ individualNum }));
    dispatch(
      displayAlert({
        type: "success",
        msg: `Number ${individualNum} has been added to the list.`,
      })
    );
    setIndividualNum("");
  };

  const form = (
    <form onSubmit={addNumberToTheList} className={style.formular}>
      <input
        inputMode="numeric"
        type="number"
        name="individualNum"
        id="individualNum"
        min="1"
        max="200"
        placeholder="1"
        value={individualNum}
        onChange={(e) => setIndividualNum((prev) => Number(e.target.value))}
        className={style.formInput}
      />
      <button className={style.add} onClick={(e) => addNumberToTheList(e)}>
        <img src={plus} alt="add" />
      </button>
    </form>
  );

  return (
    <>
      <p className={style.text}>Add a number</p>
      {form}
    </>
  );
};

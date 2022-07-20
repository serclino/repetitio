import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addIndividualNum,
  selectMainList,
  selectRolledList,
} from "../features/listsSlice";
import { displayAlert } from "../features/alertSlice";

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
    <form onSubmit={addNumberToTheList}>
      <input
        type="number"
        name="individualNum"
        id="individualNum"
        min="1"
        max="200"
        value={individualNum}
        onChange={(e) => setIndividualNum((prev) => Number(e.target.value))}
      />
      <input type="submit" value="+" />
    </form>
  );

  return (
    <>
      <div className="component">Singleton</div>
      <h5>Add Individual number to the List:</h5>
      {form}
    </>
  );
};

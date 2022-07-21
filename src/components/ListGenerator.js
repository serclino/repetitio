import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { generateMainList } from "../features/listsSlice";
import { displayAlert } from "../features/alertSlice";
import style from '../styles/components/ListGenerator.module.css';

export const ListGenerator = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [firstNum, setFirstNum] = useState(1);
  const [lastNum, setLastNum] = useState(20);

  const generateNewList = (e) => {
    e.preventDefault();
    if (firstNum > lastNum) {
      dispatch(
        displayAlert({
          type: "danger",
          msg: "First number must be smaller than last number.",
        })
      );
      return;
    }
    dispatch(generateMainList({ firstNum, lastNum }));
    dispatch(
      displayAlert({
        type: "success",
        msg: "List has been successfully created!",
      })
    );
    history.push("/overview");
  };

  const form = (
    <form onSubmit={generateNewList}>
      <label htmlFor="firstNum">Starting</label>
      <input
        type="number"
        name="firstNum"
        id="firstNum"
        step="1"
        min="1"
        max="200"
        value={firstNum}
        onChange={(e) => setFirstNum((prev) => Number(e.target.value))}
        className={style.setupInput}
      />
      <label htmlFor="lastNum">Ending</label>
      <input
        type="number"
        name="lastNum"
        id="lastNum"
        step="1"
        min="1"
        max="200"
        value={lastNum}
        onChange={(e) => setLastNum((prev) => Number(e.target.value))}
      />
      <input type="submit" value="Generate a new list" />
    </form>
  );

  return <>{form}</>;
};

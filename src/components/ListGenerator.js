import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { generateMainList } from "../features/listsSlice";
import { displayAlert } from "../features/alertSlice";
import style from "../styles/components/ListGenerator.module.css";

export const ListGenerator = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [firstNum, setFirstNum] = useState("");
  const [lastNum, setLastNum] = useState("");

  const generateNewList = (e) => {
    e.preventDefault();
    if (!firstNum || !lastNum) {
      dispatch(
        displayAlert({
          type: "danger",
          msg: "You have to specify starting and ending numbers.",
        })
      );
      return;
    }
    if (firstNum > lastNum) {
      dispatch(
        displayAlert({
          type: "danger",
          msg: "Starting number must be smaller than ending number.",
        })
      );
      return;
    }
    dispatch(generateMainList({ firstNum, lastNum }));
    dispatch(
      displayAlert({
        type: "success",
        msg: "Hooray! You created list.",
      })
    );
    history.push("/overview");
  };

  const form = (
    <form onSubmit={generateNewList} className={style.generator}>
      <div className={style.inputs}>
        <div className={`${style.singleInput} ${style.left}`}>
          <label htmlFor="firstNum">Starting</label>
          <br />
          <input
            inputMode="numeric"
            type="number"
            name="firstNum"
            id="firstNum"
            step="1"
            min="1"
            max="200"
            placeholder="1"
            value={firstNum}
            onChange={(e) => setFirstNum((prev) => Number(e.target.value))}
            className={style.inputBox}
          />
        </div>
        <div className={style.singleInput}>
          <label htmlFor="lastNum">Ending</label>
          <br />
          <input
            inputMode="numeric"
            type="number"
            name="lastNum"
            id="lastNum"
            step="1"
            min="1"
            max="200"
            placeholder="20"
            value={lastNum}
            onChange={(e) => setLastNum((prev) => Number(e.target.value))}
            className={style.inputBox}
          />
        </div>
      </div>
      <button className={style.submitBtn} type="submit">Generate list</button>
    </form>
  );

  return <>{form}</>;
};

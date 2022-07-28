import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  resetAllLists,
  generateNewListFromMistakes,
} from "../features/listsSlice";
import { removeAlert, displayAlert } from "../features/alertSlice";

import style from "../styles/components/PopUp.module.css";

export const PopUp = ({ setIsPopupOpen, type }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleYes = () => {
    dispatch(removeAlert()); // to handle very rare situation
    // in which alert state has some msg
    // and this msg would appear in the /setup page
    if (type === "new") {
      dispatch(resetAllLists());
      history.push("/setup");
    } else if (type === "mistakes") {
      dispatch(generateNewListFromMistakes());
      dispatch(
        displayAlert({
          type: "success",
          msg: "List from mistakes has been created!",
        })
      );
      history.push("/overview");
    } else if (type === "home") {
      dispatch(resetAllLists());
      history.push("/");
    }
  };
  const handleNo = () => setIsPopupOpen(false);
  const qNew = <p>Creating a new list will overwrite the current data.</p>;
  const qMistakes = <p>Creating a new list from mistakes will overwrite the current data.</p>;
  const qHome = <p>Going to Homepage will cause you to lose your current data.</p>;

  return (
    <div className={style.blurredBg}>
      <div className={style.popUp}>
        <h1>Are you sure?</h1>
        {type === "new" && qNew}
        {type === "mistakes" && qMistakes}
        {type === "home" && qHome}
        <section className={style.btns}>
          <button className={style.no} onClick={() => handleNo()}>
            Cancel
          </button>
          <button className={style.yes} onClick={() => handleYes()}>
            Ok
          </button>
        </section>
      </div>
    </div>
  );
};

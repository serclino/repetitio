import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetAllLists } from "../features/listsSlice";

export const PopUp = ({ setIsPopupOpen }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleYes = () => {
    dispatch(resetAllLists());
    history.push("/setup");
  };
  const handleNo = () => setIsPopupOpen(false);

  return (
    <div className="blurred-bg">
      <div className="popUp">
        <div className="component">PopUp</div>
        <h5>Do you really want to create a whole new list?</h5>
        <button onClick={() => handleYes()}>Yes</button>
        <button onClick={() => handleNo()}>No</button>
      </div>
    </div>
  );
};

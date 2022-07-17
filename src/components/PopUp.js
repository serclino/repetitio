import React from "react";
import { useHistory } from "react-router-dom";

export const PopUp = ({ setIsPopupOpen }) => {
  const history = useHistory();
  const handleYes = () => {
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

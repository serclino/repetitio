import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Singleton } from "../components/Singleton";
import { ListsOverview } from "../components/ListsOverview";
import { Counter } from "../components/Counter";
/* import { Info } from "../components/Info"; */
import { PopUp } from "../components/PopUp";
import { Alert } from "../components/Alert";
import { selectAlert } from "../features/alertSlice";

const OverviewPage = () => {
  const history = useHistory();
  const { showAlert } = useSelector(selectAlert);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopUp = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <>
      {isPopupOpen ? <PopUp setIsPopupOpen={setIsPopupOpen} /> : null}
      <div className="page">OverviewPage</div>
      <button onClick={(e) => openPopUp(e)}>Create a new list</button>
      {showAlert && <Alert />}
      <Singleton />
      <Counter />
      <ListsOverview />
      <button onClick={() => history.push("/roll")}>Let's study!</button>
    </>
  );
};

export default OverviewPage;

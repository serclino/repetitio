import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Singleton } from "../components/Singleton";
import { ListsOverview } from "../components/ListsOverview";
import { Counter } from "../components/Counter";
/* import { Info } from "../components/Info"; */
import { PopUp } from "../components/PopUp";
import { Alert } from "../components/Alert";
import { displayAlert, selectAlert, toggle } from "../features/alertSlice";

const OverviewPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { showAlert, listIsCreatedForTheFirstTime } = useSelector(selectAlert);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopUp = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  useEffect(() => {
    if (listIsCreatedForTheFirstTime) {
      dispatch(
        displayAlert({
          type: "success",
          msg: "List has been successfully created!",
        })
      );
      dispatch(toggle());
    }
    console.log(
      "Component OverviewPage.js rendered!",
      listIsCreatedForTheFirstTime
    );
  }, [dispatch, listIsCreatedForTheFirstTime]);

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

import React, { useEffect, useState } from "react";
import { Singleton } from "../components/Singleton";
import { ListsOverview } from "../components/ListsOverview";
import { Counter } from "../components/Counter";
import { JustRolled } from "../components/JustRolled";
import { RollButton } from "../components/RollButton";
import { NextSteps } from "../components/NextSteps";
import { useDispatch, useSelector } from "react-redux";
import { selectMainList } from "../features/listsSlice";
import { PopUp } from "../components/PopUp";
import { Alert } from "../components/Alert";
import { displayAlert, selectAlert, toggle } from "../features/alertSlice";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const mainList = useSelector(selectMainList);
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
      "Component DashboardPage.js rendered!",
      listIsCreatedForTheFirstTime
    );
  }, [dispatch, listIsCreatedForTheFirstTime]);

  return (
    <>
      {isPopupOpen ? <PopUp setIsPopupOpen={setIsPopupOpen} /> : null}
      <div className="page">DashboardPage</div>
      <button onClick={(e) => openPopUp(e)}>Create a new list</button>
      {showAlert && <Alert />}
      <Singleton />
      {mainList.length > 0 ? <RollButton /> : null}
      <JustRolled />
      <Counter />
      {mainList.length === 0 ? <NextSteps /> : null}
      <ListsOverview />
    </>
  );
};

export default DashboardPage;

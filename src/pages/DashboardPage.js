import React, { useState } from "react";
import { Singleton } from "../components/Singleton";
import { ListsOverview } from "../components/ListsOverview";
import { Counter } from "../components/Counter";
import { JustRolled } from "../components/JustRolled";
import { RollButton } from "../components/RollButton";
import { useSelector } from "react-redux";
import { selectMainList } from "../features/listsSlice";
import { PopUp } from "../components/PopUp";
import { Alert } from "../components/Alert";
import { selectAlert } from "../features/alertSlice";

const DashboardPage = () => {
  const mainList = useSelector(selectMainList);
  const { showAlert } = useSelector(selectAlert);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopUp = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

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
      <ListsOverview />
    </>
  );
};

export default DashboardPage;

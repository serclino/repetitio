import React, { useState } from "react";
import { Singleton } from "../components/Singleton";
import { ListsOverview } from "../components/ListsOverview";
import { Counter } from "../components/Counter";
import { JustRolled } from "../components/JustRolled";
import { RollButton } from "../components/RollButton";
import { NextSteps } from "../components/NextSteps";
import { useSelector } from "react-redux";
import { selectMainList } from "../features/listsSlice";
import { PopUp } from "../components/PopUp";

const DashboardPage = () => {
  const mainList = useSelector(selectMainList);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopUp = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <>
      {isPopupOpen ? <PopUp setIsPopupOpen={setIsPopupOpen} /> : null}
      <div className="page">DashboardPage</div>
      <a href="#" onClick={(e) => openPopUp(e)}>
        Create a new list
      </a>
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

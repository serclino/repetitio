import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Singleton } from "../components/Singleton";
import { ListsOverview } from "../components/ListsOverview";
import { Counter } from "../components/Counter";
import { Info } from "../components/Info";
import { PopUp } from "../components/PopUp";

const OverviewPage = () => {
  const history = useHistory();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopUp = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  }

  return (
    <>
      {isPopupOpen ? <PopUp setIsPopupOpen={setIsPopupOpen} /> : null}
      <div className="page">OverviewPage</div>
      <a href="#" onClick={(e) => openPopUp(e)}>Create a new list</a>
      <Singleton />
      <Counter />
      <ListsOverview />
      <button onClick={() => history.push("/roll")}>Let's study!</button>
    </>
  );
};

export default OverviewPage;

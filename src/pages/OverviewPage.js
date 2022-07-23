import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Singleton } from "../components/Singleton";
import { ListsOverview } from "../components/ListsOverview";

import { PopUp } from "../components/PopUp";
import { Alert } from "../components/Alert";
import { selectAlert } from "../features/alertSlice";
import infoIcon from "../resources/info/info-2@3x.png";
import logo from "../resources/logo/logo@3x.png";

import style from "../styles/pages/OverviewPage.module.css";

const OverviewPage = () => {
  const history = useHistory();
  const { showAlert } = useSelector(selectAlert);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopUp = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <section className={style.page}>
      {isPopupOpen ? <PopUp setIsPopupOpen={setIsPopupOpen} /> : null}
      {showAlert && <Alert />}
      <div className={style.whiteBg}>
        <img className={style.icon} src={logo} alt="logo" />
        <article className={style.textBox}>
          <h1 className={style.headline}>Your list is ready</h1>
          <p className={style.text}>
            You can add another number that is not in the line or just start
            your revision.
          </p>
        </article>
        <article className={style.mistakeBox}>
          <p className={style.text}>Did you mistake?</p>
          <button onClick={(e) => openPopUp(e)}>Create a new list</button>
        </article>
        <Singleton />
      </div>

      <div className={style.grayBg}>
        <ListsOverview />
        <button onClick={() => history.push("/roll")}>Study!</button>
      </div>
    </section>
  );
};

export default OverviewPage;

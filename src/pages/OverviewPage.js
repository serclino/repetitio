import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Singleton } from "../components/Singleton";
import { ListsOverview } from "../components/ListsOverview";

import { PopUp } from "../components/PopUp";
import { Alert } from "../components/Alert";
import { selectAlert } from "../features/alertSlice";
import { removeAlert } from "../features/alertSlice";

import logo from "../resources/logo/logo@3x.png";
import backArrow from "../resources/back-arrow/arrow-left@3x.png";
import style from "../styles/pages/OverviewPage.module.css";

const OverviewPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { showAlert } = useSelector(selectAlert);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopUp = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <section className={style.overviewPage}>
      {isPopupOpen ? <PopUp setIsPopupOpen={setIsPopupOpen} /> : null}
      {showAlert && <Alert />}

      <div className={style.top}>
        <button onClick={(e) => openPopUp(e)} className={style.backBtn}>
          <img src={backArrow} alt="back arrow" /> Create a new list
        </button>
        <img className={style.icon} src={logo} alt="logo" />
      </div>
      <div className={style.infoAndForm}>
        <article className={style.textBox}>
          <h1>Your list is ready</h1>
          <p>
            You can add another number that is not in the line or just start
            your revision.
          </p>
        </article>

        <Singleton />
      </div>
      <div className={style.listsAndButton}>
        <ListsOverview />
        <div className={style.centerStudy}>
          <button
            className={style.studyBtn}
            onClick={() => {
              dispatch(removeAlert()); // to handle very rare situation
              // in which alert state has some msg
              // and this msg would appear in the /setup page
              history.push("/roll");
            }}
          >
            Study!
          </button>
        </div>
      </div>
    </section>
  );
};

export default OverviewPage;

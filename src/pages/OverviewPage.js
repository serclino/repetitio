import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Singleton } from "../components/Singleton";
import { ListsOverview } from "../components/ListsOverview";

import { PopUp } from "../components/PopUp";
import { Alert } from "../components/Alert";
import { selectAlert, removeAlert } from "../features/alertSlice";

import logo from "../resources/logo/logo@3x.png";
import backArrow from "../resources/back-arrow/arrow-left@3x.png";
import style from "../styles/pages/OverviewPage.module.css";

const OverviewPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { showAlert } = useSelector(selectAlert);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // next two lines keeps box shadow on navbar when scrolling
  const [scrolled, setScrolled] = useState(false);
  const [bottom, setBottom] = useState("");

  useEffect(() => {
    const breakPoint = document
      .querySelector(".breakPoint")
      .getBoundingClientRect();
    setBottom(
      breakPoint.bottom -
        document.querySelector(".navbar").getBoundingClientRect().bottom
    );
  }, []);

  const handleScroll = () => {
    let container = document.querySelector(".container");
    // console.log("scrollTop", container.scrollTop);
    // console.log("breakPoint", bottom);
    if (container.scrollTop >= bottom) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // popup when user wants to get back to the Setup page
  const openPopUp = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <section
      className={`${style.overviewPage} container`}
      onScroll={handleScroll}
    >
      {isPopupOpen && <PopUp setIsPopupOpen={setIsPopupOpen} type='new' />}
      {showAlert && <Alert />}

      <div className={`${style.top} ${scrolled && style.scrolling} navbar`}>
        <button onClick={(e) => openPopUp(e)} className={style.backBtn}>
          <img src={backArrow} alt="back arrow" /> Create a new list
        </button>
        <img className={style.icon} src={logo} alt="logo" />
      </div>
      <div className={`${style.infoAndForm} breakPoint`}>
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

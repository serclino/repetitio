import React, { useState, useEffect } from "react";
import { Singleton } from "../components/Singleton";
import { ListsOverview } from "../components/ListsOverview";
import { Counter } from "../components/Counter";
import { JustRolled } from "../components/JustRolled";
import { RollButton } from "../components/RollButton";
import { useSelector } from "react-redux";
import { PopUp } from "../components/PopUp";
import { Alert } from "../components/Alert";
import { selectAlert } from "../features/alertSlice";

import style from "../styles/pages/DashboardPage.module.css";
import logo from "../resources/logo/logo@3x.png";
import backArrow from "../resources/back-arrow/arrow-left@3x.png";

const DashboardPage = () => {
  const { showAlert } = useSelector(selectAlert);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [widthOfOverview, setWidthOfOverview] = useState("");
  const [dimensions, setDimensions] = useState({ width: window.innerWidth });

  // following two useEffects and handleScroll provides
  // responsive navbar while scrolling
  useEffect(() => {
    function handleResize() {
      setDimensions({ width: window.innerWidth });
    }
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    const rect = document.querySelector(".container").getBoundingClientRect();
    setWidthOfOverview(rect.width);
  }, [dimensions]);

  const handleScroll = () => {
    const container = document.querySelector(".container");
    if (container.scrollTop !== 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const openPopUp = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <section className={style.dashboardPage}>
      {showAlert && <Alert />}
      {isPopupOpen && <PopUp setIsPopupOpen={setIsPopupOpen} type="new" />}
      <section
        className={`${style.overviewPart} container`}
        onScroll={handleScroll}
      >
        <div
          className={`${style.top} ${scrolled && style.scrolling}`}
          style={{ width: widthOfOverview }}
        >
          <button onClick={(e) => openPopUp(e)} className={style.backBtn}>
            <img src={backArrow} alt="back arrow" /> Create a new list
          </button>
        </div>
        <div className={style.content}>
          <article className={style.textBox}>
            <h1>Your list is ready</h1>
            <p>
              You can add another number that is not in the line or just start
              your revision.
            </p>
          </article>
          <Singleton />
          <ListsOverview />
        </div>
        <div
          className={style.linearTransition}
          style={{ width: widthOfOverview }}
        ></div>
      </section>
      <section className={style.rollPart}>
        <div className={style.logoContainer}>
          <img src={logo} alt="logo" />
        </div>
        <JustRolled />
        <div className={style.counterAndBtn}>
          <Counter />
          <RollButton />
        </div>
      </section>
    </section>
  );
};

export default DashboardPage;

import React from "react";
import { useHistory } from "react-router-dom";

import logo from "../resources/logo/logo-landing-page/Group 410@3x.png";
import style from "../styles/pages/HomePage.module.css";

const HomePage = () => {
  const history = useHistory();

  return (
    <section className={style.homepage}>
      <img src={logo} alt="logo" />
      <div className={style.interactions}>
        <button className={style.btnHow}>How it works</button>
        <button
          className={style.btnStart}
          onClick={() => history.push("/setup")}
        >
          Create list
        </button>
        <p>Version 1.0.0</p>
      </div>
    </section>
  );
};

export default HomePage;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import logo from "../resources/logo/logo-landing-page/Group 410@3x.png";
import style from "../styles/pages/HomePage.module.css";

const HomePage = () => {
  const history = useHistory();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && (
        <div className={style.blurredBg}>
          <div className={style.popUp}>
            <h1>How it works?</h1>
            <p className={style.motto}>Repetitio est mater studiorum.</p>
            <ol className={style.orderedList}>
              <li>
                <span>Create a numbered list</span> that reflects your exam
                questions.
              </li>
              <li>
                <span>Let's have a walk</span> during which we{" "}
                <span>randomize</span> your list so all you have to do is to
                keep calm and <span>repeat</span>.
              </li>
              <li><span>Don't refresh your page!</span> Otherwise you'll lose your streak.</li>
            </ol>
            <div>
              <button
                className={style.gotIt}
                onClick={() => setShowPopup(false)}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
      <section className={style.homepage}>
        <img src={logo} alt="logo" />
        <div className={style.interactions}>
          <button className={style.btnHow} onClick={() => setShowPopup(true)}>
            How it works
          </button>
          <button
            className={style.btnStart}
            onClick={() => history.push("/setup")}
          >
            Create list
          </button>
          <p>Version 1.0.0</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;

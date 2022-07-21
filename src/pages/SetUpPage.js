import React from "react";
import { useSelector } from "react-redux";
import { ListGenerator } from "../components/ListGenerator";
import { BackButton } from "../components/BackButton";
import { Alert } from "../components/Alert";
import { selectAlert } from "../features/alertSlice";
import icon from "../resources/info/info-2@3x.png";
import styles from "../styles/pages/SetUpPage.module.css";

const SetUpPage = () => {
  const { showAlert } = useSelector(selectAlert);

  return (
    <section className={styles.page}>
      <div className={styles.top}>
        <BackButton path="/" />
        <button className={styles.icon}>
          <img src={icon} alt="information" />
        </button>
      </div>
      <div className={styles.flexContainer}>
        <article className={styles.textBox}>
          <h1 className={styles.headline}>Create a list</h1>
          <p className={styles.text}>
            Pick a starting number and an ending number of your questions list.
          </p>
        </article>
        <ListGenerator />
      </div>
      {showAlert && <Alert />}
    </section>
  );
};

export default SetUpPage;

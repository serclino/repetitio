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
      <ListGenerator />
      {showAlert && <Alert />}
    </section>
  );
};

export default SetUpPage;

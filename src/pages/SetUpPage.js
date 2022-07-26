import React from "react";
import { useSelector } from "react-redux";
import { ListGenerator } from "../components/ListGenerator";
import { BackButton } from "../components/BackButton";
import { Alert } from "../components/Alert";
import { selectAlert } from "../features/alertSlice";

import logo from "../resources/logo/logo@3x.png";
import styles from "../styles/pages/SetUpPage.module.css";

const SetUpPage = () => {
  const { showAlert } = useSelector(selectAlert);

  return (
    <section className={styles.setupPage}>
      <div className={styles.top}>
        <BackButton path="/" text="Back" />
        <img src={logo} alt="logo" />
      </div>


        <ListGenerator />

      {showAlert && <Alert />}
    </section>
  );
};

export default SetUpPage;

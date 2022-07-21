import React from "react";
import { useHistory } from "react-router-dom";

import styles from "../styles/components/BackButton.module.css";
import backArrow from "../resources/back-arrow/arrow-left@3x.png";

export const BackButton = ({ path }) => {
  const history = useHistory();

  return (
    <button className={styles.backBtn} onClick={() => history.push(`${path}`)}>
      <img src={backArrow} alt="back arrow" /> Back
    </button>
  );
};

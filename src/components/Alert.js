import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAlert, selectAlert } from "../features/alertSlice";
import style from "../styles/components/Alert.module.css";

import checkCircle from "../resources/check-circle.svg";
import xCircle from "../resources/x-circle.svg";

export const Alert = () => {
  const dispatch = useDispatch();
  const { type, msg } = useSelector(selectAlert);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
    return () => clearTimeout(timeout);
  });

  return (
    <div
      className={`${style.alert} ${
        type === "danger" ? style.alertDanger : style.alertSuccess
      }`}
    >
      {type === "danger" && <img src={xCircle} alt="error" />}
      {type === "success" && <img src={checkCircle} alt="success" />}
      <p className={style.text}>{msg}</p>
    </div>
  );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAlert, selectAlert } from "../features/alertSlice";

export const Alert = () => {
  const dispatch = useDispatch();
  const { type, msg } = useSelector(selectAlert);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(removeAlert());
    }, 4000);
    return () => clearTimeout(timeout);
  });
  return (
    <>
      <div className="component">Alert</div>
      <p className={`alert alert-${type}`}>{msg}</p>
    </>
  );
};

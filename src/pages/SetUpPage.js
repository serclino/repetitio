import React from "react";
import { useSelector } from "react-redux";
import { ListGenerator } from "../components/ListGenerator";
import { BackButton } from "../components/BackButton";
import { Alert } from "../components/Alert";
import { selectAlert } from "../features/alertSlice";

const SetUpPage = () => {
  const { showAlert } = useSelector(selectAlert);

  return (
    <>
      <BackButton path="/" />
      <div className="page">SetUpPage</div>
      <ListGenerator />
      {showAlert && <Alert />}
    </>
  );
};

export default SetUpPage;

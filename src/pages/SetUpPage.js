import React from "react";
import { ListGenerator } from "../components/ListGenerator";
import { BackButton } from "../components/BackButton";

const SetUpPage = () => {
  return (
    <>
      <BackButton path='/' />
      <div className="page">SetUpPage</div>
      <ListGenerator />
    </>
  );
};

export default SetUpPage;

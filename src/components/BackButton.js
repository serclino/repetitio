import React from "react";
import { useHistory } from "react-router-dom";

export const BackButton = ({ path }) => {
  const history = useHistory();

  return <button onClick={() => history.push(`${path}`)}>⬅︎</button>;
};

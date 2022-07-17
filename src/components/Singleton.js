// součástí této komponenty bude možnost
// vytvořít ÚPLNĚ NOVÝ list (s popUpem)

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addIndividualNum,
  selectMainList,
  selectRolledList,
} from "../features/listsSlice";

export const Singleton = () => {
  const [individualNum, setIndividualNum] = useState('');
  const dispatch = useDispatch();
  const mainList = useSelector(selectMainList);
  const rolledList = useSelector(selectRolledList);

  const addNumberToTheList = (e) => {
    e.preventDefault();
    if (
      mainList.includes(individualNum) ||
      rolledList.includes(individualNum)
    ) {
      return console.log("error. this number is already in the list.");
    }
    dispatch(addIndividualNum({ individualNum }));
    setIndividualNum('');
  };

  const form = (
    <form onSubmit={addNumberToTheList}>
      <input
        type="number"
        name="individualNum"
        id="individualNum"
        min="1"
        max="200"
        value={individualNum}
        onChange={(e) => setIndividualNum((prev) => Number(e.target.value))}
      />
      <input type="submit" value="+" />
    </form>
  );

  return (
    <>
      <div className="component">Singleton</div>
      <h5>Add Individual number to the List:</h5>
      {form}
    </>
  );
};

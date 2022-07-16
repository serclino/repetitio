import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { generateMainList } from "../features/listsSlice";

export const ListGenerator = () => {
  const dispatch = useDispatch();
  const [firstNum, setFirstNum] = useState(1);
  const [lastNum, setLastNum] = useState(20);

  const generateNewList = (e) => {
    e.preventDefault();
    if (firstNum > lastNum) {
      return console.log("error: lastNum must be bigger than firstNum");
    }
    dispatch(generateMainList({ firstNum, lastNum }));
  };

  const form = (
    <form onSubmit={generateNewList}>
      <label htmlFor="firstNum">First number:</label>
      <input
        type="number"
        name="firstNum"
        id="firstNum"
        step="1"
        min="1"
        max="200"
        value={firstNum}
        onChange={(e) => setFirstNum((prev) => Number(e.target.value))}
      />
      <label htmlFor="lastNum">Last number:</label>
      <input
        type="number"
        name="lastNum"
        id="lastNum"
        step="1"
        min="1"
        max="200"
        value={lastNum}
        onChange={(e) => setLastNum((prev) => Number(e.target.value))}
      />
      <input type="submit" value="Generate a new list" />
    </form>
  );

  return <>{form}</>;
};

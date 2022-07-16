import React, { useState } from "react";

export const ListGenerator = () => {
  const [list, setList] = useState([]);
  const [rolledList, setRolledList] = useState([]);
  const [mistakesList, setMistakesList] = useState([]);

  const [firstNum, setFirstNum] = useState(1);
  const [lastNum, setLastNum] = useState(20);
  const [rolledNum, setRolledNum] = useState(null);

  const generateNewList = (e) => {
    e.preventDefault();
    if (firstNum > lastNum) {
      return console.log("error: lastNum must be bigger than firstNum");
    }
    setList((prev) => {
      const newList = [];
      for (let i = firstNum; i <= lastNum; i++) {
        newList.push(i);
      }
      return newList;
    });
    setRolledList((prev) => []);
    setRolledNum((prev) => null);
  };

  const handleRoll = () => {
    const randomNum = Math.floor(Math.random() * list.length);
    const targetNum = list[randomNum];
    setRolledNum(targetNum);
    setList((prev) => prev.filter((n) => n !== targetNum));
    setRolledList((prev) => [...prev, targetNum]);
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

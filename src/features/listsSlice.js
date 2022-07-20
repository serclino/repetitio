import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainList: [],
  rolledList: [],
  mistakesList: [],
};

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    generateMainList: (state, action) => {
      // FIXED
      state.mainList = [];
      const { firstNum, lastNum } = action.payload;
      for (let i = firstNum; i <= lastNum; i++) {
        state.mainList.push({
          number: i,
          css: "gray-bg",
        });
      }
      state.rolledList = [];
      state.mistakesList = [];
    },
    rollDice: (state, action) => {
      // FIXED
      const randomNum = Math.floor(Math.random() * state.mainList.length);
      const targetNum = state.mainList[randomNum];
      state.mainList = state.mainList.filter(
        (n) => n.number !== targetNum.number
      );
      state.rolledList.push(targetNum);
    },
    toggleMistake: (state, action) => {
      // FIXED
      const { rolledNum } = action.payload;
      if (
        state.mistakesList[state.mistakesList.length - 1]?.number === rolledNum
      ) {
        state.mistakesList.pop();
      } else {
        console.log("push");
        state.mistakesList.push(state.rolledList[state.rolledList.length - 1]);
      }
    },
    generateNewListFromMistakes: (state, action) => {
      // FIXED
      state.mainList = state.mistakesList.sort(function (a, b) {
        return a.number - b.number;
      });
      state.rolledList = [];
      state.mistakesList = [];
    },
    addIndividualNum: (state, action) => {
      // FIXED
      const { individualNum } = action.payload;
      state.mainList.push({
        number: individualNum,
        css: "white-bg",
      });
      state.mainList.sort(function (a, b) {
        return a.number - b.number;
      });
    },
    resetAllLists: (state, action) => {
      // FIXED
      state.mainList = [];
      state.rolledList = [];
      state.mistakesList = [];
    },
  },
});

export default listsSlice.reducer;

export const {
  generateMainList,
  rollDice,
  toggleMistake,
  generateNewListFromMistakes,
  addIndividualNum,
  resetAllLists,
} = listsSlice.actions;

export const selectMainList = (state) => state.lists.mainList;
export const selectRolledList = (state) => state.lists.rolledList;
export const selectMistakesList = (state) => state.lists.mistakesList;

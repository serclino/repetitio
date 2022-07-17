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
      state.mainList = [];
      const { firstNum, lastNum } = action.payload;
      for (let i = firstNum; i <= lastNum; i++) {
        state.mainList.push(i);
      }
      state.rolledList = [];
      state.mistakesList = [];
    },
    rollDice: (state, action) => {
      const randomNum = Math.floor(Math.random() * state.mainList.length);
      const targetNum = state.mainList[randomNum];
      state.mainList = state.mainList.filter((n) => n !== targetNum);
      state.rolledList.unshift(targetNum);
    },
    toggleMistake: (state, action) => {
      const { rolledNum } = action.payload;
      if (!state.mistakesList.includes(rolledNum)) {
        state.mistakesList.unshift(rolledNum);
      } else {
        state.mistakesList.shift();
      }
    },
    generateNewListFromMistakes: (state, action) => {
      state.mainList = state.mistakesList.sort(function (a, b) {
        return a - b;
      });
      state.rolledList = [];
      state.mistakesList = [];
    },
    addIndividualNum: (state, action) => {
      const { individualNum } = action.payload;
      state.mainList.push(individualNum);
      state.mainList.sort(function (a, b) {
        return a - b;
      });
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
} = listsSlice.actions;

export const selectMainList = (state) => state.lists.mainList;
export const selectRolledList = (state) => state.lists.rolledList;
export const selectMistakesList = (state) => state.lists.mistakesList;

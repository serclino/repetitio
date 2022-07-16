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
        state.mainList = state.mainList.filter(n => n !== targetNum);
        state.rolledList.push(targetNum);
    },
    toggleMistake: (state, action) => {
        const { rolledNum } = action.payload;
        if (!state.mistakesList.includes(rolledNum)) {
            state.mistakesList.push(rolledNum);
        } else {
            state.mistakesList = state.mistakesList.filter(n => n !== rolledNum);
        }
    }
  },
});

export default listsSlice.reducer;

export const { generateMainList, rollDice, toggleMistake } = listsSlice.actions;

export const selectMainList = (state) => state.lists.mainList;
export const selectRolledList = (state) => state.lists.rolledList;
export const selectMistakesList = (state) => state.lists.mistakesList;
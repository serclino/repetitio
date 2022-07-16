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
    }
  },
});

export default listsSlice.reducer;

export const { generateMainList } = listsSlice.actions;

export const selectMainList = (state) => state.lists.mainList; 

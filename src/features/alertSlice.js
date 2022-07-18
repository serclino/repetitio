import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
  type: "",
  msg: "",
  listIsCreatedForTheFirstTime: true,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    displayAlert: (state, action) => {
      const { type, msg } = action.payload;
      state.showAlert = true;
      state.type = type;
      state.msg = msg;
    },
    removeAlert: (state, action) => {
      state.showAlert = false;
      state.type = "";
      state.msg = "";
    },
    toggle: (state, action) => {
      state.listIsCreatedForTheFirstTime = !state.listIsCreatedForTheFirstTime;
    },
  },
});

export default alertSlice.reducer;

export const { displayAlert, removeAlert, toggle } = alertSlice.actions;

export const selectAlert = (state) => state.alert;

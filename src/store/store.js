import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "../features/listsSlice";

export default configureStore({
  reducer: {
    lists: listsReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userSlice from "../features/crud/userSlice";
import todoSlice from "../features/Todo/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
    todo: todoSlice,
  },
});

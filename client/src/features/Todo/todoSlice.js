import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    deleteOne: (state, action) => {
      state.list = state.list.filter((list, i) => i !== action.payload);
    },
    deleteAll: (state) => {
      state.list = [];
    },
  },
});

export const { add, deleteOne, deleteAll } = todoSlice.actions;

export default todoSlice.reducer;

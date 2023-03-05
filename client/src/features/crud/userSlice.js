import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.user = state.user.filter((u) => u.id !== action.payload);
    },
    updateUser: (state, action) => {
      state.user.map((u) => {
        if (u.id === action.payload.id) {
          u.id = action.payload.id;
          u.firstName = action.payload.firstName;
          u.lastName = action.payload.lastName;
          u.password = action.payload.password;
          // const data = [...state.user];
          // const newData = {
          //   id: action.payload.id,
          //   firstName: action.payload.firstName,
          //   lastName: action.payload.lastName,
          //   password: action.payload.password,
          // };
          // const i = state.user.findIndex((u) => u.id === action.payload.id);
          // state.user[i] = newData;
        }
        return u;
      });
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Define the initial state (empty array of users)
const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Register a new user and add it to the users array
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { registerUser } = userSlice.actions;
export default userSlice.reducer;
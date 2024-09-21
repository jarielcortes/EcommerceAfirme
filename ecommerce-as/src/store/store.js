import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slices"; // Import the root reducer from slices

//Setup store for the application using redux tookit. It implements the rootReducer.
const store = configureStore({
  reducer: rootReducer,
});

export default store;

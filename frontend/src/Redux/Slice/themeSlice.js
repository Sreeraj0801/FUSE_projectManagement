import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 isDarkMode :true
};

export const themeSlice = createSlice({
  name: "themeDetails",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode
    }
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

export const themeReducer = (state) => state.persistedReducer.themeReducer;
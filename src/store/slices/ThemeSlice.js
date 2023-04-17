import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "Light Theme",
    textColor: "black",
    bgColor: "white",
    btnColor: "white",
  },
  reducers: {
    toggleTheme(state, action) {
      state.textColor = action.payload.text;
      state.bgColor = action.payload.color;
      state.theme = action.payload.theme;
      state.btnColor = action.payload.button;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

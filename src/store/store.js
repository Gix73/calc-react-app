import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/ThemeSlice";

export default configureStore({
  reducer: { theme: themeSlice },
});

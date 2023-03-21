import { configureStore } from "@reduxjs/toolkit";
import calcSlice from "./slices/CalcSlice";
import themeSlice from "./slices/ThemeSlice";

export default configureStore({
  reducer: {
    theme: themeSlice,
    calc: calcSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

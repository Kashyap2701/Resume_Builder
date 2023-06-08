import { configureStore } from "@reduxjs/toolkit";
import educationSlice from "./ResumeSlices/educationSlice";
import workSlice from "./ResumeSlices/workSlice";

const store = configureStore({
  reducer: {
    work: workSlice.reducer,
    education: educationSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

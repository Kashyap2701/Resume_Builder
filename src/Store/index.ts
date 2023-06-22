import { configureStore } from "@reduxjs/toolkit";
import curResumeSlice from "./curResumeSlice";
import resumeSlice from "./resumeSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    resume: resumeSlice.reducer,
    curResume: curResumeSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import educationSlice from "./ResumeSlices/educationSlice";
import interestSlice from "./ResumeSlices/interest";
import languageSlice from "./ResumeSlices/languageSlice";
import skillSlice from "./ResumeSlices/skillSlice";
import workSlice from "./ResumeSlices/workSlice";

const store = configureStore({
  reducer: {
    work: workSlice.reducer,
    education: educationSlice.reducer,
    skill: skillSlice.reducer,
    language: languageSlice.reducer,
    interest: interestSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

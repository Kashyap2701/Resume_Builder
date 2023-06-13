import { configureStore } from "@reduxjs/toolkit";
import contactslice from "./ResumeFormSlices/contactSlice";
import educationSlice from "./ResumeFormSlices/educationSlice";
import interestSlice from "./ResumeFormSlices/interest";
import languageSlice from "./ResumeFormSlices/languageSlice";
import profileslice from "./ResumeFormSlices/profileSlice";
import skillSlice from "./ResumeFormSlices/skillSlice";
import workSlice from "./ResumeFormSlices/workSlice";
import resumeSlice from "./resumeSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    profile: profileslice.reducer,
    contact: contactslice.reducer,
    work: workSlice.reducer,
    education: educationSlice.reducer,
    skill: skillSlice.reducer,
    language: languageSlice.reducer,
    interest: interestSlice.reducer,
    resume: resumeSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

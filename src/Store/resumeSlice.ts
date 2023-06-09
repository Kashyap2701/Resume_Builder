import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { profile } from "./ResumeFormSlices/profileSlice";
import { contact } from "./ResumeFormSlices/contactSlice";
import { experience } from "./ResumeFormSlices/workSlice";
import { degree } from "./ResumeFormSlices/educationSlice";
import { interest } from "./ResumeFormSlices/interest";
import { language } from "./ResumeFormSlices/languageSlice";
import { skill } from "./ResumeFormSlices/skillSlice";

interface resumeData {
  profileInfo: profile;
  contact: profile;
  experiences: experience[];
  education: degree[];
  skills: skill[];
  interests: interest[];
  language: language[];
}

interface ResumeState {
  resume: resumeData[];
}

const initialState: ResumeState = {
  resume: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addResume: (state, action: PayloadAction<resumeData>) => {
      state.resume.push(action.payload);
    },
    deleteResume: (state, action: PayloadAction<string>) => {
      state;
    },
  },
});

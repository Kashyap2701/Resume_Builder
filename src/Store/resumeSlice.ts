import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../Service/firebase";
import {
  profile,
  contact,
  experience,
  degree,
  skill,
  interest,
  language,
} from "../Utils/Types";

export interface resume {
  id: string;
  resume_title: string;
  userId: string;
  resumeData: {
    profileInfo: profile;
    contacts: contact;
    experiences: experience[];
    education: degree[];
    skills: skill[];
    interests: interest[];
    languages: language[];
  };
}

export type resumeData = Extract<resume, { resumeData: unknown }>["resumeData"];

interface ResumeState {
  resumeList: resume[];
}

const initialState: ResumeState = {
  resumeList: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addResume: (state, action: PayloadAction<resume>) => {
      state.resumeList.push(action.payload);
    },
    deleteResume: (state, action: PayloadAction<string>) => {
      state.resumeList = state.resumeList.filter(
        (resume) => resume.id != action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchResumeList.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.resumeList = action.payload;
      }
    );
  },
});

export const fetchResumeList = createAsyncThunk(
  "resume/fetchResumeList",
  async (userId: string) => {
    const resumeCollectionRef = collection(db, "resume");
    try {
      const data = await getDocs(resumeCollectionRef);
      const filteredData = data.docs
        .map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          } as resume;
        })
        .filter((doc) => {
          if (doc.userId == userId) return doc;
        });
      return filteredData;
    } catch (error) {
      console.log(error);
    }
  }
);

export const resumeActions = resumeSlice.actions;
export default resumeSlice;

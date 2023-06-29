/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Service/firebase";
import { resume } from "../Utils/Types";

export type resumeData = Extract<resume, { resumeData: unknown }>["resumeData"];

interface ResumeState {
  status: "pending" | "fullfilled" | "rejected" | "";
  resumeList: resume[];
}

const initialState: ResumeState = {
  status: "",
  resumeList: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    // reducers for resume operation
    addResume: (state, action: PayloadAction<resume>) => {
      state.resumeList.push(action.payload);
    },
    deleteResume: (state, action: PayloadAction<string>) => {
      state.resumeList = state.resumeList.filter(
        (resume) => resume.id != action.payload
      );
    },
  },
  // reducer for set the list of resume to redux state
  extraReducers: (builder) => {
    builder.addCase(fetchResumeList.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(
      fetchResumeList.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "fullfilled";
        state.resumeList = action.payload;
      }
    );
    builder.addCase(fetchResumeList.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

// Async thunk for fetching list of resumes from firebase
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

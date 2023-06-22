import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Service/firebase";
import {
  profile,
  resume,
  contact,
  experience,
  degree,
  skill,
  interest,
  language,
} from "../Utils/Types";

type curResumeState = {
  status: "pending" | "fulfilled" | "rejected" | "";
  resumeDetails: resume;
};

const initialState: curResumeState = {
  status: "",
  resumeDetails: {
    id: "",
    resume_title: "",
    userId: "",
    resumeData: {
      profileInfo: {
        profilePhoto: "",
        firstname: "",
        lastname: "",
        jobtitle: "",
        about: "",
      },
      contacts: {
        mobileno: "",
        email: "",
        website: "",
        address: "",
      },
      experiences: [],
      education: [],
      skills: [],
      interests: [],
      languages: [],
    },
  },
};

const curResumeSlice = createSlice({
  name: "curResume",
  initialState,
  reducers: {
    addprofileInfo: (state, action: PayloadAction<profile>) => {
      state.resumeDetails.resumeData.profileInfo = action.payload;
    },
    addContacts: (state, action: PayloadAction<contact>) => {
      state.resumeDetails.resumeData.contacts = action.payload;
    },
    addExperience: (state, action: PayloadAction<experience>) => {
      state.resumeDetails.resumeData.experiences.push(action.payload);
    },
    deleteExperience: (state, action: PayloadAction<string>) => {
      const updatedData = state.resumeDetails.resumeData.experiences.filter(
        (data) => data.id !== action.payload
      );
      state.resumeDetails.resumeData.experiences = updatedData;
    },
    updateExperience: (state, action: PayloadAction<experience>) => {
      state.resumeDetails.resumeData.experiences =
        state.resumeDetails.resumeData.experiences.map((data) =>
          data.id == action.payload.id
            ? { ...action.payload, id: data.id }
            : data
        );
    },
    addEducation: (state, action: PayloadAction<degree>) => {
      state.resumeDetails.resumeData.education.push(action.payload);
    },
    deleteEducation: (state, action: PayloadAction<string>) => {
      const updatedData = state.resumeDetails.resumeData.education.filter(
        (data) => data.id !== action.payload
      );
      state.resumeDetails.resumeData.education = updatedData;
    },
    updateEducation: (state, action: PayloadAction<degree>) => {
      state.resumeDetails.resumeData.education =
        state.resumeDetails.resumeData.education.map((data) =>
          data.id == action.payload.id
            ? { ...action.payload, id: data.id }
            : data
        );
    },
    addskill: (state, action: PayloadAction<skill>) => {
      state.resumeDetails.resumeData.skills.push(action.payload);
    },
    deleteSkill: (state, action: PayloadAction<string>) => {
      state.resumeDetails.resumeData.skills =
        state.resumeDetails.resumeData.skills.filter(
          (skill) => skill.id != action.payload
        );
    },
    addlanguage: (state, action: PayloadAction<language>) => {
      state.resumeDetails.resumeData.languages.push(action.payload);
    },
    deletelanguage: (state, action: PayloadAction<string>) => {
      state.resumeDetails.resumeData.languages =
        state.resumeDetails.resumeData.languages.filter(
          (language) => language.id != action.payload
        );
    },
    addinterest: (state, action: PayloadAction<interest>) => {
      state.resumeDetails.resumeData.interests.push(action.payload);
    },
    deleteinterest: (state, action: PayloadAction<string>) => {
      state.resumeDetails.resumeData.interests =
        state.resumeDetails.resumeData.interests.filter(
          (interest) => interest.id != action.payload
        );
    },
    resetState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchResumeDetails.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(
      fetchResumeDetails.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "fulfilled";
        state.resumeDetails = action.payload;
      }
    );
    builder.addCase(fetchResumeDetails.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export const fetchResumeDetails = createAsyncThunk(
  "curResume/fetchResumeDetails",
  async (resumeId: string) => {
    const resumeRef = doc(db, "resume", resumeId);
    try {
      const doc = await getDoc(resumeRef);
      console.log(doc.data());
      return doc.data();
    } catch (error) {
      console.log(error);
    }
  }
);

export const curResumeActions = curResumeSlice.actions;
export default curResumeSlice;

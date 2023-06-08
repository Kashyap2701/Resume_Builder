import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface degree {
  id: string;
  title: string;
  startedYear: string;
  endedYear: string;
  courseName: string;
  university: string;
  desc: string;
}

interface educationState {
  educations: degree[];
}

const initialState: educationState = {
  educations: [],
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation: (state, action: PayloadAction<degree>) => {
      state.educations.push(action.payload);
    },
    deleteEducation: (state, action: PayloadAction<string>) => {
      const updatedData = state.educations.filter(
        (data) => data.id !== action.payload
      );
      state.educations = updatedData;
    },
    updateEducation: (state, action: PayloadAction<degree>) => {
      state.educations = state.educations.map((data) =>
        data.id == action.payload.id ? { ...action.payload, id: data.id } : data
      );
    },
  },
});

export const educationAction = educationSlice.actions;
export default educationSlice;

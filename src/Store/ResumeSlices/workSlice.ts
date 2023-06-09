import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface experience {
  id: string;
  title: string;
  startedYear: string | number;
  endedYear: string | number;
  jobTitle: string;
  companyName: string;
  desc: string;
}

interface WorkState {
  experiences: experience[];
}

const initialState: WorkState = {
  experiences: [],
};

const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {
    addExperience: (state, action: PayloadAction<experience>) => {
      state.experiences.push(action.payload);
    },
    deleteExperience: (state, action: PayloadAction<string>) => {
      const updatedData = state.experiences.filter(
        (data) => data.id !== action.payload
      );
      state.experiences = updatedData;
    },
    updateExperience: (state, action: PayloadAction<experience>) => {
      state.experiences = state.experiences.map((data) =>
        data.id == action.payload.id ? { ...action.payload, id: data.id } : data
      );
    },
  },
});

export const workActions = workSlice.actions;
export default workSlice;

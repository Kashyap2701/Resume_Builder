import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface skill {
  id: string;
  name: string;
}

interface intialState {
  skills: skill[];
}

const initialState: intialState = {
  skills: [],
};

const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    addskill: (state, action: PayloadAction<skill>) => {
      state.skills.push(action.payload);
    },
    deleteSkill: (state, action: PayloadAction<string>) => {
      state.skills = state.skills.filter((skill) => skill.id != action.payload);
    },
  },
});

export const skillActions = skillSlice.actions;
export default skillSlice;

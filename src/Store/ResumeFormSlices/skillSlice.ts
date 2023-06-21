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
    loadSkill: (state, action: PayloadAction<skill[]>) => {
      state.skills = action.payload;
    },
    addskill: (state, action: PayloadAction<skill>) => {
      state.skills.push(action.payload);
    },
    deleteSkill: (state, action: PayloadAction<string>) => {
      state.skills = state.skills.filter((skill) => skill.id != action.payload);
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const skillActions = skillSlice.actions;
export default skillSlice;

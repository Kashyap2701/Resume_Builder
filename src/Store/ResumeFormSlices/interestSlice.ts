import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface interest {
  id: string;
  name: string;
}

interface intialState {
  interests: interest[];
}

const initialState: intialState = {
  interests: [],
};

const interestSlice = createSlice({
  name: "interest",
  initialState,
  reducers: {
    loadInterest: (state, action: PayloadAction<interest[]>) => {
      state.interests = action.payload;
    },
    addinterest: (state, action: PayloadAction<interest>) => {
      state.interests.push(action.payload);
    },
    deleteinterest: (state, action: PayloadAction<string>) => {
      state.interests = state.interests.filter(
        (interest) => interest.id != action.payload
      );
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const interestActions = interestSlice.actions;
export default interestSlice;

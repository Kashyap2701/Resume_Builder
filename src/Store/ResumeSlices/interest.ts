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
    addinterest: (state, action: PayloadAction<interest>) => {
      state.interests.push(action.payload);
    },
    deleteinterest: (state, action: PayloadAction<string>) => {
      state.interests = state.interests.filter(
        (interest) => interest.id != action.payload
      );
    },
  },
});

export const interestActions = interestSlice.actions;
export default interestSlice;

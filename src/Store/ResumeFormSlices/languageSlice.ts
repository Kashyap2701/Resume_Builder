import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface language {
  id: string;
  name: string;
}

interface intialState {
  languages: language[];
}

const initialState: intialState = {
  languages: [],
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    loadLanguage: (state, action: PayloadAction<language[]>) => {
      state.languages = action.payload;
    },
    addlanguage: (state, action: PayloadAction<language>) => {
      state.languages.push(action.payload);
    },
    deletelanguage: (state, action: PayloadAction<string>) => {
      state.languages = state.languages.filter(
        (language) => language.id != action.payload
      );
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const languageActions = languageSlice.actions;
export default languageSlice;

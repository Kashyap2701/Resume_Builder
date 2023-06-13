import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface profile {
  profilePhoto: string;
  firstname: string;
  lastname: string;
  jobtitle: string;
  about: string;
}

interface profileState {
  profileInfo: profile;
}

const initialState: profileState = {
  profileInfo: {
    jobtitle: "",
    firstname: "",
    lastname: "",
    about: "",
    profilePhoto: "",
  },
};

const profileslice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addprofileInfo: (state, action: PayloadAction<profile>) => {
      state.profileInfo = action.payload;
    },
  },
});

export const profileActions = profileslice.actions;
export default profileslice;

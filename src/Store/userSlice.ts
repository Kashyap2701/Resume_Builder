import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
export interface user {
  fullname: string | null;
  email: string | null;
  profilePhoto: string | null;
}

interface UserState {
  isLoggedIn: boolean;
  user: user | null;
}

const initialState: UserState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn") as string) || false,
  user: JSON.parse(localStorage.getItem("user") as string) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedIn: (state, action: PayloadAction<user>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    loggedOut: (state) => {
      state.user = null;
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "false");
      localStorage.setItem("user", "null");
    },
    editUser: (state, action: PayloadAction<user>) => {
      state.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;

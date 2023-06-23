import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
export interface user {
  fullname: string | null;
  email: string | null;
  profilePhoto: string | null | Promise<string> | Blob;
}

interface UserState {
  id: string;
  isLoggedIn: boolean;
  user: user | null;
}

const initialState: UserState = {
  id: localStorage.getItem("id") || "",
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn") as string) || false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedIn: (state, action: PayloadAction<{ id: string; user: user }>) => {
      state.id = action.payload.id;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      localStorage.setItem("id", state.id);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    loggedOut: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.id = "";
      localStorage.setItem("id", "");
      localStorage.setItem("isLoggedIn", "false");
      localStorage.setItem("user", "null");
    },
    editUser: (state, action: PayloadAction<user>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;

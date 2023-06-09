import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface contact {
  mobileno: string;
  email: string;
  website: string;
  address: string;
}

interface contactState {
  contacts: contact;
  isempty: boolean;
}

const initialState: contactState = {
  contacts: {
    mobileno: "",
    email: "",
    website: "",
    address: "",
  },
  isempty: true,
};

const contactslice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContacts: (state, action: PayloadAction<contact>) => {
      state.isempty = false;
      state.contacts = action.payload;
    },
  },
});

export const contactActions = contactslice.actions;
export default contactslice;

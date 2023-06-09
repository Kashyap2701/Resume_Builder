import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface contact {
  mobileno: string;
  email: string;
  website: string;
  address: string;
}

interface contactState {
  contacts: contact;
}

const initialState: contactState = {
  contacts: {
    mobileno: "0989753453534",
    email: "",
    website: "",
    address: "",
  },
};

const contactslice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContacts: (state, action: PayloadAction<contact>) => {
      state.contacts = action.payload;
    },
  },
});

export const contactActions = contactslice.actions;
export default contactslice;

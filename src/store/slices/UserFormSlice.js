import { createSlice } from "@reduxjs/toolkit";

const userFormSlice = createSlice({
  name: "userForm",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    state: "",
    city: "",
    zip: "",
  },
  reducers: {
    updateForm: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { updateForm } = userFormSlice.actions;

export const userFormSliceReducer = userFormSlice.reducer;

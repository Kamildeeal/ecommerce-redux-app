import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormErrors {
  firstName?: boolean;
  lastName?: boolean;
  phoneNumber?: boolean;
  houseNumber?: boolean;
  email?: boolean;
  postalCode?: boolean;
  city?: boolean;
}

interface FormDataState {
  firstName: string;
  lastName: string;
  country: string;
  phoneNumber: string;
  street: string;
  houseNumber: string;
  email: string;
  postalCode: string;
  city: string;
  errors: FormErrors;
}

const initialState: FormDataState = {
  firstName: "",
  lastName: "",
  country: "Poland",
  phoneNumber: "",
  street: "",
  houseNumber: "",
  email: "",
  postalCode: "",
  city: "",
  errors: {},
};

const clientInfoSlice = createSlice({
  name: "clientInfo",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      state[action.payload.name as keyof FormDataState] = action.payload.value;
    },
    setErrors: (state, action: PayloadAction<FormErrors>) => {
      state.errors = action.payload;
    },
    resetForm: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { updateField, setErrors, resetForm } = clientInfoSlice.actions;
export default clientInfoSlice.reducer;

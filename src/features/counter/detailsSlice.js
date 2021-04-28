import { createSlice } from '@reduxjs/toolkit';

export const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    details: null,
  },
  reducers: {
    updateDetails: (state,action) => {
      state.details = action.payload;
    },
    removeDetails: state => {
      state.details = null;
    },
  },
});

export const { updateDetails,removeDetails } = detailsSlice.actions;

export const selectDetails = state => state.details.details;

export default detailsSlice.reducer;

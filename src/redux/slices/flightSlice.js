import { createSlice } from "@reduxjs/toolkit";
import { getFlight } from "../actions/flightAction";

const initialState = {
  flights: [],
  isLoading: false,
  isError: false,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  extraReducers: (builder) => {
    builder
      //cevap beklerken

      .addCase(getFlight.pending, (state) => {
        state.isLoading = true;
      })
      //olumlu cevap geldiginde
      .addCase(getFlight.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.flights = action.payload;
      })
      // olumsuz cevap gelince
      .addCase(getFlight.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        alert("An error accured");
      });
  },
});

export default flightSlice.reducer;

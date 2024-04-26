import { createSlice } from "@reduxjs/toolkit";
import filmOperations from "./film-operation";

const filmSlice = createSlice({
  name: "films",
  initialState: {
    films: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(filmOperations.filmList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(filmOperations.filmList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.films = action.payload;
      state.error = null;
    });
    builder.addCase(filmOperations.filmList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(filmOperations.filmSearch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(filmOperations.filmSearch.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.films = action.payload;
      state.error = null;
    });
    builder.addCase(filmOperations.filmSearch.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default filmSlice.reducer;

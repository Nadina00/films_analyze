import { createSlice } from "@reduxjs/toolkit";
import genreOperations from "./genre-operation";

const genreSlice = createSlice({
  name: "genre",
  initialState: {
    genre: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(genreOperations.genreList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(genreOperations.genreList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.genre = action.payload;
      state.error = null;
    });
    builder.addCase(genreOperations.genreList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default genreSlice.reducer;

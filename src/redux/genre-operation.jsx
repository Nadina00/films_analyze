import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const APP_KEY = import.meta.env.VITE_SOME_KEY;

const genreList = createAsyncThunk("genre/genreList", async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${APP_KEY}&language=en-US`
    );

    return data.genres;
  } catch (error) {
    console.error(error);
  }
});

const genreOperations = {
  genreList,
};

export default genreOperations;

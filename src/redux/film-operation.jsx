import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import.meta.env.VITE_SOME_KEY;

const APP_KEY = import.meta.env.VITE_SOME_KEY;

const filmList = createAsyncThunk("films/filmList", async (page) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APP_KEY}&year=2016-01-01&page=${page}`
    );
    return data.results;
  } catch (error) {
    console.error(error);
  }
});

const filmSearch = createAsyncThunk("films/filmSearch", async (guary) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&query=${guary}&language=en-US&include_adult=false`
    );
    return data.results;
  } catch (error) {
    console.error(error);
  }
});

const filmOperations = {
  filmList,
  filmSearch,
};

export default filmOperations;

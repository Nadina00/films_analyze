import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const APP_KEY = "4bceebe1d1f9bc99c966449bdeaecb86";

const genreList = createAsyncThunk("genre/genreList", async () => {
  try {
    const {data} = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${APP_KEY}&language=en-US`
    );
   
    return (data.genres);
  } catch (error) {
    console.error(error);
  }
});

const genreOperations = {
    genreList,
  
  };
  
  export default genreOperations;
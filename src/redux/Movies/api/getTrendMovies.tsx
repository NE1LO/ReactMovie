import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWQ1OTNhZjBkMDYwMGY5ODgzMjNiYTFjODY1OGJmNCIsInN1YiI6IjY1ZTYyYTlhYjdhMTU0MDE4NjdkZmM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yqg0NGsW4G6vxu1qUxwKDxf_ANq8juHarX95DFzKVEs",
  },
});

const getTrendMovies = createAsyncThunk("movies/trend", async (_, thunkAPI) => {
  try {
    const response = await apiInstance.get("trending/movie/day?page=1");
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    return thunkAPI.rejectWithValue("error");
  }
});

export default getTrendMovies;

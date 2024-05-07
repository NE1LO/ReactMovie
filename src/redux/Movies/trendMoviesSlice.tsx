import { createSlice } from "@reduxjs/toolkit";
import getTrendMovies from "./api/getTrendMovies";

interface TrendMoviesState {
  items: string[];
}

const initialState: TrendMoviesState = {
  items: [],
};

const trendMoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrendMovies.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default trendMoviesSlice.reducer;

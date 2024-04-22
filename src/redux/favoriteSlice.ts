import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favoritesTracks",
  initialState: [],
  reducers: {
    addNewTrack: {
      reducer(state, action) {
        state.push(action);
      },
      prepare(id) {
        return { payload: { id } };
      },
    },
    deleteTrack: {
      reducer(state, action) {
        return state.filter((i) => i !== action.payload.id);
      },
      prepare(id) {
        return { payload: { id } };
      },
    },
  },
});
export const { addNewTrack, deleteTrack } = favoriteSlice.actions;
export const favoritesTracksReducer = favoriteSlice.reducer;

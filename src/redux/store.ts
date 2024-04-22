import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { favoritesTracksReducer } from "./favoriteSlice";

const persistConfig = {
  key: "movie",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  favorite: favoritesTracksReducer,
});

const persisterReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persisterReducer,
});
export const persistor = persistStore(store);

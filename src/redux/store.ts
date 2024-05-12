import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

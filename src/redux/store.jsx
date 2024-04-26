import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import filmsReducer from "./film-slice";
import genreReducer from "./genre-slice";

// Persisting token field from auth slice to localstorage

const filmsPersistConfig = {
  key: "films",
  storage,
  whitelist: ["current"],
};

export const store = configureStore({
  reducer: {
    films: persistReducer(filmsPersistConfig, filmsReducer),
    genre: genreReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);

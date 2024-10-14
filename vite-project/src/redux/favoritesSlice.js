import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorite(state, { payload }) {
      const exists = state.items.find((item) => item.id === payload.id);
      if (exists) {
        state.items = state.items.filter((item) => item.id !== payload.id);
      } else {
        state.items.push(payload);
      }
    },
  },
});

const persistConfig = {
  key: "favorites",
  storage,
};

export const favoritesReducer = persistReducer(persistConfig, favoritesSlice.reducer);
export const { toggleFavorite } = favoritesSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import { campersReducer, resetCampers } from "../redux/slice";  // Імпортуй resetCampers із slice.js
import { favoritesReducer } from "../redux/favoritesSlice";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Додаємо експорт екшену resetCampers
export { resetCampers };

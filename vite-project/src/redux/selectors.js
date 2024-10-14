import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = (state) => state.campers.loading;
export const selectErrorState = (state) => state.campers.error;
export const selectAllCampers = (state) => state.campers.items;
export const selectCamperDetails = (state) => state.campers.chosenItem;
export const selectTotalCampers = (state) => state.campers.total;
export const selectShowMore = createSelector(
  [selectAllCampers, selectTotalCampers],
  (campers, total) => campers.length > 0 && campers.length < total
);
export const selectNotFoundState = (state) => state.campers.notFound;
export const selectIsButtonDisabled = createSelector(
  [selectErrorState, selectIsLoading],
  (error, loading) => error || loading
);
export const selectFavorites = (state) => state.favorites.items;

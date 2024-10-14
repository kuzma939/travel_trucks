import { createSlice } from "@reduxjs/toolkit";
import { getCamperById, getCampers } from "../services/api";


const handleLoading = (state) => {
  state.error = false;
  state.notFound = false;
  state.loading = true;
};

const handleError = (state, { payload }) => {
  if (payload.status === 404) {
    state.notFound = true;
  } else {
    state.error = true;
  }
  state.loading = false;
};
const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    chosenItem: null,
    total: null,
    error: null,
    loading: false,
    notFound: false,
  },
  reducers: {
    resetCampers: (state) => {
      state.items = [];
    },
    setFavorite: (state, action) => {
      const camperId = action.payload;
      const camper = state.items.find((item) => item.id === camperId);
      if (camper) {
        camper.isFavorite = !camper.isFavorite; // Зміна статусу "улюбленого"
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handleLoading)
      .addCase(getCampers.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload.items];
        state.total = payload.total;
        state.loading = false;
      })
      .addCase(getCampers.rejected, handleError)
      .addCase(getCamperById.pending, handleLoading)
      .addCase(getCamperById.fulfilled, (state, { payload }) => {
        state.chosenItem = payload;
        state.loading = false;
      })
      .addCase(getCamperById.rejected, handleError);
  },
});

export const campersReducer = campersSlice.reducer;
export const { resetCampers, setFavorite } = campersSlice.actions;
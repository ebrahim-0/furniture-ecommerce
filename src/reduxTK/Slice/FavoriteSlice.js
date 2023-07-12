import { createSlice } from "@reduxjs/toolkit";

export const FavoriteSlice = createSlice({
  initialState: [],
  name: "favoriteSlice",
  reducers: {
    addToFavorite: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (!findProduct) {
        const cloneProduct = { ...action.payload, favorite: true };
        state.push(cloneProduct);
      }
    },
    deleteFromFavorite: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: () => {
      return [];
    },
  },
});

export const { addToFavorite, deleteFromFavorite, clear } =
  FavoriteSlice.actions;

export default FavoriteSlice.reducer;

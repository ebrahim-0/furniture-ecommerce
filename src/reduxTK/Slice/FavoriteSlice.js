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
        const cloneProduct = { ...action.payload };
        state.push(cloneProduct);
      }
    },
  },
});

export const { addToFavorite } = FavoriteSlice.actions;

export default FavoriteSlice.reducer;

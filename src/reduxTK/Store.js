import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Slice/ProductsSlice";
import ProductDetailsSlice from "./Slice/ProductDetailsSlice";
import CategoriesSlice from "./Slice/CategoriesSlice";
import cartSlice from "./Slice/CartSlice";
import FavoriteSlice from "./Slice/FavoriteSlice";

export const Store = configureStore({
  reducer: {
    products: ProductsSlice,
    details: ProductDetailsSlice,
    categories: CategoriesSlice,
    cart: cartSlice,
    favorite: FavoriteSlice,
  },
});

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    const res = await fetch("https://course-api.com/react-store-products");
    const data = res.json();
    return data;
  }
);

const ProductSlice = createSlice({
  initialState: [],
  name: "productSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, actions) => {
      return actions.payload;
    });
  },
});

export const {} = ProductSlice.actions;

export default ProductSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "productDetailsSlice/fetchProduct",
  async (id) => {
    const res = await fetch(
      `https://course-api.com/react-store-single-product?id=${id}`
    );
    const data = res.json();
    return data;
  }
);

const ProductDetailsSlice = createSlice({
  initialState: [],
  name: "productDetailsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, actions) => {
      return actions.payload;
    });
  },
});

export const {} = ProductDetailsSlice.actions;

export default ProductDetailsSlice.reducer;

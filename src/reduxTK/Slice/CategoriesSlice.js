import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsByCategories = createAsyncThunk(
  "categoriesSlice/fetchProductsByCategories",
  async (category) => {
    const res = await fetch("https://course-api.com/react-store-products");
    const data = await res.json();
    const filter = category
      ? data.filter((data) => data.category === category)
      : data;
    return filter;
  }
);

const CategoriesSlice = createSlice({
  initialState: [],
  name: "categoriesSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsByCategories.fulfilled, (state, actions) => {
      return actions.payload;
    });
  },
});

export const {} = CategoriesSlice.actions;

export default CategoriesSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

const baseUrl = "http://localhost:5001/api/products/";

export const fethProducts = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await axios(baseUrl);
    return response.data;
  }
);

export const postProduct = createAsyncThunk(
  "product/postProduct",
  async (product) => {
    const response = await axios.post(baseUrl, product);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fethProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        state.products.push(action.payload)
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((product)=> product._id !== action.payload)

      });
  },
});

export default productSlice.reducer;

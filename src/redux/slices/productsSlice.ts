import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from '../actions/productAction';
import { RootState } from '../store';

const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const selectProducts = (state:RootState) => state.product.products;
export const selectLoading = (state:RootState) => state.product.isLoading;
export default ProductsSlice.reducer;
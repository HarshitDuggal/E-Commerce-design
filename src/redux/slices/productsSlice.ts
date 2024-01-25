import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from '../actions/productAction';
import {RootState} from '../store';

const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: false,
    searchText: '',
  },
  reducers: {
    searchReducer(state, action) {
      console.log('This is action search', action.payload.search);

      state.searchText = action.payload.search;
    },
  },
  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;

      state.products = action.payload.products;
    });
    builder.addCase(getProducts.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const selectProducts = (state: RootState) => state.product.products;
export const selectLoading = (state: RootState) => state.product.isLoading;
export const selectSearchText = (state: RootState) => state.product.searchText;
export const {searchReducer} = ProductsSlice.actions;
export default ProductsSlice.reducer;

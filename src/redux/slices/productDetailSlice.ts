import {createSlice} from '@reduxjs/toolkit';
import {getProductDetails} from '../actions/productDetailsAction';
import {RootState} from '../store';

const ProductDataSlice = createSlice({
  name: 'productData',
  initialState: {
    product: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProductDetails.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.isLoading = false;
        console.log("Thgis is product details",action.payload);
        
      state.product = action.payload;
      console.log(state.product);
      
    });
    builder.addCase(getProductDetails.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const selectProduct = (state: RootState) => state.productDetails.product;
export default ProductDataSlice.reducer;

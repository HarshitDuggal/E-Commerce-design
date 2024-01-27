import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

const ProductQuantitySlice = createSlice({
  name: 'productQuantity',
  initialState: {
    productswithQuantity: [],
  },
  reducers: {
    productQuantityReducer(state, action) {
      state.productswithQuantity = action.payload;
      console.log('This is state', state.productswithQuantity);
    },
  },
});

export const selectproductWithQuantity = (state: RootState) =>
  state.productWithQuantity.productswithQuantity;
export const {productQuantityReducer} = ProductQuantitySlice.actions;
export default ProductQuantitySlice.reducer;

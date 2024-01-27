import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

const ProductQuantitySlice = createSlice({
  name: 'productQuantity',
  initialState: {
    productswithQuantity: [],
    totalPrice: 0,
    deliveryPrice: 20,
    subTotal: 0,
  },
  reducers: {
    productQuantityReducer(state, action) {
      state.productswithQuantity = action.payload;
      state.totalPrice = state.productswithQuantity.reduce(
        (total, { product, quantity }) => total + product.price * quantity,
        0
      );
      state.subTotal = state.totalPrice + state.deliveryPrice;
    },
    
  },
});

export const selectproductWithQuantity = (state: RootState) =>
  state.productWithQuantity.productswithQuantity;
export const selectTotal = (state: RootState) =>
  state.productWithQuantity.totalPrice;
export const selectDelivery = (state: RootState) =>
  state.productWithQuantity.deliveryPrice;
export const selectsubTotal = (state: RootState) =>
  state.productWithQuantity.subTotal;
export const {productQuantityReducer} =
  ProductQuantitySlice.actions;
export default ProductQuantitySlice.reducer;

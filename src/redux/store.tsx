import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import favouriteSlice from "./slices/favouriteSlice";
import productDetailSlice from "./slices/productDetailSlice";
import productQuantitySlice from "./slices/productQuantitySlice";
const store = configureStore({
    reducer:{
        product:productsSlice,
        favourite:favouriteSlice,
        productDetails:productDetailSlice,
        productWithQuantity:productQuantitySlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export default store;
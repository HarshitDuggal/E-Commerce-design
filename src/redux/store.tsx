import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import favouriteSlice from "./slices/favouriteSlice";
import productDetailSlice from "./slices/productDetailSlice";
const store = configureStore({
    reducer:{
        product:productsSlice,
        favourite:favouriteSlice,
        productDetails:productDetailSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>
export default store;
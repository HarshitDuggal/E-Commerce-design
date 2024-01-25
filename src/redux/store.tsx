import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import favouriteSlice from "./slices/favouriteSlice";
const store = configureStore({
    reducer:{
        product:productsSlice,
        favourite:favouriteSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export default store;
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
const store = configureStore({
    reducer:{
        product:productsSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export default store;
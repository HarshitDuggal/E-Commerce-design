import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

const FavouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favouriteProducts: [],
  },
  reducers: {
    favProductReducer(state, action) {
        console.log(action.payload);
        
      state.favouriteProducts = action.payload;
    },
  },
});

export const selectFavouriteProduct = (state: RootState) =>
  state.favourite.favouriteProducts;
export const {favProductReducer} = FavouriteSlice.actions;
export default FavouriteSlice.reducer;

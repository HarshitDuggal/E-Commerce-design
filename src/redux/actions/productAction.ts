import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('getProducts', async payload => {
  try {
    const response = await axios.get(`https://dummyjson.com/products`);
    
    return response.data;
  } catch (error) {
    console.log('Error in Redux', error);
  }
});

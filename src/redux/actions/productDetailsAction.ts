import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductDetails = createAsyncThunk(
  'getProductDetails',
  async payload => {
    try {
      console.log('This is payload', payload);

      const response = await axios.get(
        `https://dummyjson.com/products/${payload}`,
      );

      return response.data;
    } catch (error) {
      console.log('Error in Redux', error);
    }
  },
);

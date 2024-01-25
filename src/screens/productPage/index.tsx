import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectProductId} from '../../redux/slices/productsSlice';
import { getProductDetails } from '../../redux/actions/productDetailsAction';

const ProductPage = () => {
  const productId = useSelector(selectProductId);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getProductDetails(productId))
  }, [])
  
  return (
    <View>
      <Text>ProductPage</Text>
    </View>
  );
};

export default ProductPage;

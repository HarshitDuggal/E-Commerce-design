import {View, StatusBar} from 'react-native';
import React from 'react';
import cartStyles from './style';
import {Colors} from '../../constants/theme';
import HeaderContainer from '../../components/productPageHeader';

const Cart = () => {
  return (
    <View style={cartStyles.mainContainer}>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <HeaderContainer
        title={`Shopping Cart (1)`}
        showCartButton={false}
        // quantity={undefined}
      />
    </View>
  );
};

export default Cart;

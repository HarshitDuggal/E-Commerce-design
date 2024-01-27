import React from 'react';
import {View, StatusBar, TouchableOpacity, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../../constants/theme';
import HeaderContainer from '../../components/productPageHeader';
import {selectproductWithQuantity} from '../../redux/slices/productQuantitySlice';
import ListingCard from '../../components/listingCard';
import cartStyles from './style';
import LottieView from 'lottie-react-native';

const Cart = () => {
  const productsInCart = useSelector(selectproductWithQuantity);
  console.log("This is products in cart length", productsInCart.length);
  
  return (
    <View style={cartStyles.mainContainer}>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <HeaderContainer
        title={`Shopping Cart (${productsInCart.length})`}
        showCartButton={false}
      />
      {productsInCart.length > 0 ? (
        <>
          <ListingCard cartProducts={productsInCart} />
          <View style={cartStyles.bottomContainer}>
            <TouchableOpacity>
              <Text style={cartStyles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={cartStyles.checkoutContainer}>
            <View style={{marginTop: 10}}>
              <View style={cartStyles.totalContainer}>
                <Text style={cartStyles.totalText}>Subtotal</Text>
                <Text style={[cartStyles.totalText, {fontFamily: 'Manrope-Medium'}]}>$ total</Text>
              </View>
              <View style={cartStyles.totalContainer}>
                <Text style={cartStyles.totalText}>Delivery</Text>
                <Text style={[cartStyles.totalText, {fontFamily: 'Manrope-Medium'}]}>$ delivery</Text>
              </View>
              <View style={cartStyles.totalContainer}>
                <Text style={cartStyles.totalText}>Total</Text>
                <Text style={[cartStyles.totalText, {fontFamily: 'Manrope-Medium'}]}>$ total + delivery</Text>
              </View>
            </View>
            <TouchableOpacity style={cartStyles.checkoutButton}>
              <Text style={cartStyles.checkoutText}>Proceed To checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={{flex:1/0.9}}>
          <LottieView
          style={{flex:1}}
            source={require('../../images/json/EmptyCart.json')}
            autoPlay
            loop
          />
        </View>
      )}
    </View>
  );
};

export default Cart;

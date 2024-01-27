import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../constants/theme';
import {MinusBlack, PlusBlack} from '../../images/svg/index';
import {useDispatch} from 'react-redux';
import {productQuantityReducer} from '../../redux/slices/productQuantitySlice';

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const ListingCard = ({cartProducts}) => {
  const [cart, setCart] = useState<{product: Product; quantity: number}[]>([]);

  const dispatch = useDispatch();

  const handleDecreaseQuantity = product => {
    console.log(product.product.id, 'What is this');

    const index = cart.findIndex(
      item => item.product.id === product.product.id,
    );
    if (index !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[index].quantity === 1) {
        updatedCart.splice(index, 1); // Remove the product from the cart
      } else {
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity - 1,
        };
      }
      setCart(updatedCart); // Update the cart state
      dispatch(productQuantityReducer(updatedCart)); // Dispatch action with updatedCart
    }
  };
  const handleIncreaseQuantity = product => {
    console.log('This is prodct', product);

    const index = cart.findIndex(
      item => item.product.id === product.product.id,
    );
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: updatedCart[index].quantity + 1,
      };
      setCart(updatedCart);
      dispatch(productQuantityReducer(updatedCart));
    } else {
      // If the product is not in the cart, add it with quantity 1
      const updatedCart = [...cart, {product: product, quantity: 1}];
      setCart(updatedCart);
      dispatch(productQuantityReducer(updatedCart));
    }
  };

  useEffect(() => {
    setCart(cartProducts);
  }, []);
  return (
    <View style={{paddingLeft: '5%', paddingRight: '5%', marginTop: 30}}>
      {cart?.map(item => (
        <View key={item.product.id}>
          <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: item.product.images[0],
                }}
                style={styles.listImage}
              />
              <View>
                <Text style={styles.text}>{item.product.title}</Text>
                <Text style={[styles.text, {fontFamily: 'Manrope-Regular'}]}>
                  ${item.product.price}
                </Text>
              </View>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={[styles.iconContainer, {marginRight: 11}]}
                onPress={() => handleDecreaseQuantity(item)}>
                <MinusBlack height={20} width={20} />
              </TouchableOpacity>
              <Text style={[styles.text, {marginRight: 11}]}>
                {item.quantity}
              </Text>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => handleIncreaseQuantity(item)}>
                <PlusBlack height={20} width={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.hr} />
        </View>
      ))}
    </View>
  );
};

export default ListingCard;

const styles = StyleSheet.create({
  listImage: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: Colors.black,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    height: 40,
    width: 40,
    backgroundColor: Colors.gray3,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hr: {
    backgroundColor: '#EBEBFB',
    height: 0.5,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
});

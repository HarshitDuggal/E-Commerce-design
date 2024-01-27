import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../constants/theme';
import {
  HeartIcon,
  MinusIcon,
  PlusIcon,
  FilledHeartIcon,
} from '../../images/svg';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/actions/productAction';
import {
  productIdReducer,
  selectLoading,
  selectProducts,
  selectSearchText,
} from '../../redux/slices/productsSlice';
import {useNavigation} from '@react-navigation/native';
import {favProductReducer} from '../../redux/slices/favouriteSlice';
import {
  productQuantityReducer,
  selectproductWithQuantity,
} from '../../redux/slices/productQuantitySlice';
import LottieView from 'lottie-react-native';
interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

export const ProductComponent = ({
  product,
  favoriteProducts,
  setFavoriteProducts,
  showHeartIcon = true,
  cart,
  setCart,
}: {
  product: Product;
  favoriteProducts: Product[];
  setFavoriteProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  showHeartIcon?: boolean;
  cart: {product: Product; quantity: number}[];
  setCart: React.Dispatch<
    React.SetStateAction<{product: Product; quantity: number}[]>
  >;
}) => {
  const navigation = useNavigation();
  const cartItem = cart.find(item => item.product.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleQuantityIncrease = () => {
    const index = cart.findIndex(item => item.product.id === product.id);
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

  const handleQuantityDecrease = () => {
    const index = cart.findIndex(item => item.product.id === product.id);
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

  const handleFavourites = () => {
    const isProductInFavorites = favoriteProducts.some(
      favoriteProduct => favoriteProduct.id === product.id,
    );

    if (!isProductInFavorites) {
      setFavoriteProducts(prevFavorites => [...prevFavorites, product]);
    } else {
      setFavoriteProducts(prevFavorites =>
        prevFavorites.filter(
          favoriteProduct => favoriteProduct.id !== product.id,
        ),
      );
    }
  };
  const dispatch = useDispatch();
  const handleProductPage = (id: number) => {
    navigation.navigate('ProductPageScreen' as never);
    dispatch(productIdReducer(id));
  };

  return (
    <TouchableOpacity
      onPress={() => handleProductPage(product.id)}
      key={product.id}
      style={{
        backgroundColor: Colors.gray2,
        borderRadius: 12,
        width: '46%',
        padding: 10,
        marginTop: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {showHeartIcon &&
        favoriteProducts.some(
          favoriteProduct => favoriteProduct.id === product.id,
        ) ? (
          <FilledHeartIcon
            onPress={handleFavourites}
            width={20}
            height={20}
            style={{marginTop: -80}}
          />
        ) : (
          showHeartIcon && (
            <HeartIcon
              width={20}
              height={20}
              onPress={handleFavourites}
              style={{marginTop: -80}}
            />
          )
        )}
        <Image
          source={{
            uri: product.images[0],
          }}
          style={{
            width: '80%',
            height: 100,
            borderRadius: 8,
            marginLeft: 10,
          }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text>{product.price}$</Text>
        {quantity > 0 ? (
          <View
            style={{
              backgroundColor: Colors.white,
              flexDirection: 'row',
              marginLeft: 50,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={handleQuantityDecrease}
                style={{
                  backgroundColor: Colors.darkBlue,
                  borderRadius: 50,
                }}>
                <MinusIcon width={20} height={20} />
              </TouchableOpacity>
              <Text> {quantity}</Text>
              <TouchableOpacity
                onPress={handleQuantityIncrease}
                style={{
                  backgroundColor: Colors.darkBlue,
                  borderRadius: 50,
                  marginLeft: 5,
                }}>
                <PlusIcon width={20} height={20} />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity
            onPress={handleQuantityIncrease}
            style={{
              backgroundColor: Colors.darkBlue,
              borderRadius: 50,
              marginLeft: 80,
            }}>
            <PlusIcon width={20} height={20} />
          </TouchableOpacity>
        )}
      </View>
      <Text>{product.title}</Text>
    </TouchableOpacity>
  );
};

const Product = () => {
  const fetchedProducts = useSelector(selectProducts);
  const isLoading = useSelector(selectLoading);
  const searchText = useSelector(selectSearchText);
  // const productQty = useSelector(selectproductWithQuantity);

  const dispatch = useDispatch<any>();
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<{product: Product; quantity: number}[]>([]);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const filteredProducts = fetchedProducts.filter((product: Product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  useEffect(() => {
    dispatch(favProductReducer(favoriteProducts));
  }, [favoriteProducts]);
  
  return (
    <>
      {isLoading ? (
        <ActivityIndicator style={{marginTop: 100}} size="large" color="#000" />
      ) : (
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {filteredProducts.length > 0 ? (
            <>
              {filteredProducts.map((product: Product) => (
                <ProductComponent
                  key={product.id}
                  product={product}
                  favoriteProducts={favoriteProducts}
                  setFavoriteProducts={setFavoriteProducts}
                  cart={cart}
                  setCart={setCart}
                />
              ))}
            </>
          ) : (
            <View>
              <Text>No Products</Text>
            </View>
          )}
        </View>
      )}
    </>
  );
};

export default Product;

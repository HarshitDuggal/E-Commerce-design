import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectProductId} from '../../redux/slices/productsSlice';
import {getProductDetails} from '../../redux/actions/productDetailsAction';
import productPageStyles from './style';
import HeaderContainer from '../../components/productPageHeader';
import {selectProduct} from '../../redux/slices/productDetailSlice';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Colors} from '../../constants/theme';
import {HeartIcon, MinusBlack, PlusBlack} from '../../images/svg';
import {
  productQuantityReducer,
  selectproductWithQuantity,
} from '../../redux/slices/productQuantitySlice';
import {useNavigation} from '@react-navigation/native';

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const ProductPage = () => {
  const productDescription = useSelector(selectProduct);
  const productId = useSelector(selectProductId);
  const productQty = useSelector(selectproductWithQuantity);
  const {width: screenWidth} = Dimensions.get('window');

  const [currentSlide, setCurrentSlide] = useState(0);
  const [cart, setCart] = useState<{product: Product; quantity: number}[]>([]);
  const dispatch = useDispatch<any>();
  const navigation = useNavigation();

  const handleFavourite = (productInfo: {}) => {
    console.log('Hello');
    //set dispatch to send to favourites list
  };
  const handleAddToCart = (product: Product) => {
    const updatedCart = [...cart, {product: product, quantity: 1}];
    setCart(updatedCart);
    dispatch(productQuantityReducer(updatedCart));
  };
  const handleBuyNow = () => {
    navigation.navigate('CartScreen' as never);
  };
  const handleQuantityDecrease = (product) => {
    console.log(product.product.id,"What is this");
    
    const index = cart.findIndex(item => item.product.id === product.product.id);
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
  const handleQuantityIncrease = (product) => {
    console.log("This is prodct",product);
    
    const index = cart.findIndex(item => item.product.id === product.product.id);
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
    dispatch(getProductDetails(productId));
    setCart(productQty);
  }, []);

  return (
    <View style={productPageStyles.mainContainer}>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <HeaderContainer title={undefined} showCartButton={true} />
      <ScrollView>
        <View style={productPageStyles.topContainer}>
          <Text style={productPageStyles.titleText}>
            {productDescription.title}
          </Text>
          <View style={productPageStyles.ratingContainer}>
            {/* Rating here */}
            <Text style={productPageStyles.reviewText}>20 Reviews</Text>
          </View>
          <View>
            <Carousel
              data={productDescription?.images}
              renderItem={({item}) => (
                <Image
                  source={{uri: item}}
                  style={productPageStyles.productImage}
                  resizeMode="contain"
                />
              )}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              onSnapToItem={index => setCurrentSlide(index)}
            />
            <Pagination
              dotsLength={productDescription?.images?.length || 0}
              activeDotIndex={currentSlide}
              containerStyle={productPageStyles.paginationContainer}
              dotStyle={productPageStyles.paginationDot}
              inactiveDotStyle={productPageStyles.paginationInactiveDot}
              inactiveDotOpacity={0.6}
              inactiveDotScale={0.8}
            />
            <TouchableOpacity
              onPress={() => handleFavourite(productDescription)}
              style={productPageStyles.heartContainer}>
              <HeartIcon />
            </TouchableOpacity>
          </View>
          <View style={productPageStyles.productDetailsContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Text style={productPageStyles.priceText}>
                ${productDescription?.price}
              </Text>
              <View style={productPageStyles.promotionContainer}>
                <Text style={productPageStyles.promotionText}>
                  $
                  {(
                    (productDescription?.price *
                      productDescription?.discountPercentage) /
                    100
                  ).toFixed(2)}{' '}
                  OFF
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', padding: 10}}>
              {productQty.map(item => {
                if (item.product.id === productDescription.id) {
                  return (
                    <View
                      key={item.product.id}
                      style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <MinusBlack onPress={() => handleQuantityDecrease(item)}>
                        <Text style={{fontSize: 20, marginRight: 5}}>-</Text>
                      </MinusBlack>
                      <Text style={{fontSize: 16}}>{item.quantity}</Text>
                      <PlusBlack onPress={() => handleQuantityIncrease(item)}>
                        <Text style={{fontSize: 20, marginLeft: 5}}>+</Text>
                      </PlusBlack>
                    </View>
                  );
                }
                return null;
              })}
              {/* If the product is not in the productQty array, show Add to Cart button */}
              {!productQty.some(
                item => item.product.id === productDescription.id,
              ) && (
                <TouchableOpacity
                  onPress={() => handleAddToCart(productDescription)}
                  style={productPageStyles.addButton}>
                  <Text style={productPageStyles.cartText}>Add To Cart</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={productPageStyles.buyButton}
                onPress={() => handleBuyNow(productDescription)}>
                <Text
                  style={[productPageStyles.cartText, {color: Colors.white}]}>
                  Buy Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 30, marginBottom: 10}}>
            <Text style={productPageStyles.detailTitleText}>Details</Text>
            <Text
              style={[
                productPageStyles.detailTitleText,
                {color: Colors.placeholderText},
              ]}>
              {productDescription?.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductPage;

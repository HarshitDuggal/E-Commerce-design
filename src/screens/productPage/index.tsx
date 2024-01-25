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
import {HeartIcon} from '../../images/svg';

const ProductPage = () => {
  const productDescription = useSelector(selectProduct);
  const productId = useSelector(selectProductId);
  const {width: screenWidth} = Dimensions.get('window');

  const [currentSlide, setCurrentSlide] = useState(0);
  const [favourite, setFavourite] = useState(false);
  const dispatch = useDispatch<any>();

  const handleFavourite = (productInfo: {}) => {
    console.log('Hello');
    //set dispatch to send to favourites list
  };
  const handleAddToCart = product => {
    console.log('Added to cart fffuntionality');
  };
  const handleBuyNow = product => {
    console.log('This is buy now functionality got to cart direct');
  };

  useEffect(() => {
    dispatch(getProductDetails(productId));
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
              dotsLength={productDescription?.images?.length}
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
            <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => handleAddToCart(productDescription)}
                  style={productPageStyles.addButton}>
                  <Text style={productPageStyles.cartText}>Add To Cart</Text>
                </TouchableOpacity>
              </View>
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

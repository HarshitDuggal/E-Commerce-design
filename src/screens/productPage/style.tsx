import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/theme';

const productPageStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  topContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    marginTop: 21,
  },
  titleText: {
    fontSize: 50,
    fontFamily: 'Manrope-ExtraBold',
    color: Colors.black,
  },
  productImage: {
    width: '100%',
    height: 207,
    marginTop: 15,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: -18,
    left: -10,
  },
  paginationDot: {
    width: 18,
    height: 5,
    borderRadius: 4,
    marginRight: -10,
    backgroundColor: Colors.gray1,
  },
  paginationInactiveDot: {
    width: 18,
    height: 5,
    borderRadius: 4,
    marginRight: -10,
    backgroundColor: Colors.gray2,
  },
  heartContainer: {
    width: 58,
    height: 58,
    backgroundColor: Colors.white,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
    top: 25,
    right: 10,
  },
  productDetailsContainer: {
    marginTop: 26,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  priceText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 16,
    color: Colors.darkBlue,
  },
  promotionText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 12,
    color: Colors.gray2,
  },
  promotionContainer: {
    backgroundColor: Colors.darkBlue,
    borderRadius: 70,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginLeft: 14,
  },
  addButton: {
    height: 56,
    width: 143,
    borderColor: Colors.darkBlue,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButton: {
    height: 56,
    width: 56,
    borderColor: Colors.darkBlue,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButton: {
    height: 56,
    width: 169,
    backgroundColor: Colors.darkBlue,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    fontSize: 14,
    fontFamily: 'Manrope-SemiBold',
    includeFontPadding: false,
    color: Colors.darkBlue,
  },
  detailTitleText: {
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
    color: Colors.gray3,
    lineHeight: 24,
  },
  reviewText: {
    marginLeft: 5,
    color: Colors.gray3,
    fontSize: 14,
    fontFamily: 'Manrope-Regular',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
});

export default productPageStyles;

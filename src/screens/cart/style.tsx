import {StyleSheet} from 'react-native';
import { Colors } from '../../constants/theme';
const cartStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  listContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    marginTop: 30,
  },
  editText: {
    alignSelf: 'flex-end',
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: Colors.darkBlue,
  },
  bottomContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  checkoutContainer: {
    width: '95%',
    height: 250,
    backgroundColor: Colors.black,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    padding: 17,
    justifyContent: 'space-between',
  },
  totalText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: Colors.black,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14.5,
    paddingHorizontal: 10,
  },
  checkoutButton: {
    backgroundColor: Colors.darkBlue,
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutText: {
    fontFamily: 'Manrope-SemiBold',
    includeFontPadding: false,
    fontSize: 14,
    color: Colors.white,
  },
  lottieImage: {
    height: 200,
    width: 200,
  },
  productNotFoundText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 14,
    color: Colors.gray5,
  },
});

export default cartStyles;
import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/theme';

const headerStyles = StyleSheet.create({
  searchBarContainer: {
    justifyContent: 'flex-start',
    backgroundColor: Colors.darkBlue,
    borderRadius: 28,
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 28,
  },
  searchBar: {
    color: Colors.gray4,
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    width: '100%',
    includeFontPadding: false,
  },
  headerContainer: {
    height: 220,
    backgroundColor: Colors.lightBlue,
    width: '100%',
    paddingLeft: '5%',
    paddingRight: '5%',
    justifyContent: 'space-around',
  },
  titleText: {
    fontFamily: 'Manrope-SemiBold',
    includeFontPadding: false,
    fontSize: 22,
    color: Colors.white,
  },
  searchIcon: {
    marginRight: 12,
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallText: {
    fontSize: 11,
    fontFamily: 'Manrope-ExtraBold',
    color: Colors.white,
    opacity: 0.5,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  addressText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    marginRight: 10,
    color: Colors.white,
  },
  
});

export default headerStyles;
import { StyleSheet } from "react-native";
import { Colors } from "../../constants/theme";

export const flashCardStyles = StyleSheet.create({
    cardContainer: {
      height: 123,
      width: 269,
      backgroundColor: Colors.darkYellow,
      borderRadius: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginRight: 18
    },
    cardImage: {
      height: 100,
      width: 100,
      borderRadius: 10,
    },
    adsTitleText: {
      fontFamily: 'Manrope-Light',
      fontSize: 20,
      color: Colors.white,
    },
    percentText: {
      fontFamily: 'Manrope-Bold',
      fontSize: 25,
      color: Colors.white,
    },
    adsDetailText: {
      fontFamily: 'Manrope-Light',
      fontSize: 12,
      color: Colors.white,
    },
  });
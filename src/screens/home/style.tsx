import { StyleSheet } from "react-native";
import { Colors } from "../../constants/theme";

export const homeStyles = StyleSheet.create({
    scrollContainer: {
        paddingLeft: '5%',
        paddingRight: '5%',
        marginTop: 27,
        marginBottom: 250,
      },
      titleText: {
        fontFamily: 'Manrope-SemiBold',
        includeFontPadding: false,
        fontSize: 22,
        color: Colors.gray6,
      },
})
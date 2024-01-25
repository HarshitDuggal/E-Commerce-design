import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { Colors } from '../../constants/theme';
import { BlackBag,BackArrowIcon } from '../../images/svg';
import { useNavigation } from '@react-navigation/native';

const HeaderContainer = ({title, showCartButton}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.circle}>
            <BackArrowIcon
              style={{
                transform: [{rotate: '90deg'}],
              }}
              height={13}
              width={13}
              stroke={Colors.black}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      {showCartButton ? <BlackBag   /> : null}
    </View>
  );
};

export default HeaderContainer;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    marginLeft: '5%',
    marginRight: '5%',
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: Colors.black,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 21,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: 'Manrope-Regular',
  },
});
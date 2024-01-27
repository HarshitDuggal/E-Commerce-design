import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/theme';

const ListingCard = () => {
  return (
    <View style={{paddingLeft: '5%', paddingRight: '5%', marginTop: 30}}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
            }}
            style={styles.listImage}
          />
        </View>
      </View>
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
    backgroundColor: Colors.black,
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

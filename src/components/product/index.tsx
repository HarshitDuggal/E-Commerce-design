import {View, Text, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/theme';
import {HeartIcon, PlusIcon} from '../../images/svg';

const Product = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
      <View
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
          <HeartIcon style={{marginTop: -80}} />
          <Image
            source={{uri: 'https://cdn.dummyjson.com/product-images/28/1.jpg'}}
            style={{width: '80%', height: 100, borderRadius: 8, marginLeft: 10}}
            resizeMode="cover"
          />
        </View>
        <View
          style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Text>1300$</Text>
          <View
            style={{
              backgroundColor: Colors.darkBlue,
              borderRadius: 50,
              marginLeft: 80,
            }}>
            <PlusIcon width={20} height={20} />
          </View>
        </View>
        <Text>Clown subtext</Text>
      </View>
      <View
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
          <HeartIcon style={{marginTop: -80}} />
          <Image
            source={{uri: 'https://cdn.dummyjson.com/product-images/28/1.jpg'}}
            style={{width: '80%', height: 100, borderRadius: 8, marginLeft: 10}}
            resizeMode="cover"
          />
        </View>
        <View
          style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Text>1300$</Text>
          <View
            style={{
              backgroundColor: Colors.darkBlue,
              borderRadius: 50,
              marginLeft: 80,
            }}>
            <PlusIcon width={20} height={20} />
          </View>
        </View>
        <Text>Clown subtext</Text>
      </View>
      <View
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
          <HeartIcon style={{marginTop: -80}} />
          <Image
            source={{uri: 'https://cdn.dummyjson.com/product-images/28/1.jpg'}}
            style={{width: '80%', height: 100, borderRadius: 8, marginLeft: 10}}
            resizeMode="cover"
          />
        </View>
        <View
          style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Text>1300$</Text>
          <View
            style={{
              backgroundColor: Colors.darkBlue,
              borderRadius: 50,
              marginLeft: 80,
            }}>
            <PlusIcon width={20} height={20} />
          </View>
        </View>
        <Text>Clown subtext</Text>
      </View>
      <View
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
          <HeartIcon style={{marginTop: -80}} />
          <Image
            source={{uri: 'https://cdn.dummyjson.com/product-images/28/1.jpg'}}
            style={{width: '80%', height: 100, borderRadius: 8, marginLeft: 10}}
            resizeMode="cover"
          />
        </View>
        <View
          style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Text>1300$</Text>
          <View
            style={{
              backgroundColor: Colors.darkBlue,
              borderRadius: 50,
              marginLeft: 80,
            }}>
            <PlusIcon width={20} height={20} />
          </View>
        </View>
        <Text>Clown subtext</Text>
      </View>
    </View>
  );
};

export default Product;

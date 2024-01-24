import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../constants/theme';
import {
  HeartIcon,
  MinusIcon,
  PlusIcon,
  FilledHeartIcon,
} from '../../images/svg';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/actions/productAction';
import {selectLoading, selectProducts} from '../../redux/slices/productsSlice';

const Product = () => {
  //selector funnctions
  const fetchedProducts = useSelector(selectProducts);
  const isLoading = useSelector(selectLoading);

  //dispatch function's
  const dispatch = useDispatch<any>();
  useEffect(() => {
    getProductsFunc();
  }, []);
  //useState's
  const [quantity, setQuantity] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  //functions
  const handleQuantityIncrease = () => {
    setQuantity(() => quantity + 1);
  };
  const handleQuantityDecrease = () => {
    setQuantity(() => quantity - 1);
  };
  const handleFavourites = () => {
    setIsFavorited(!isFavorited);
  };
  const getProductsFunc = () => {
    dispatch(getProducts());
  };

  return (
    <>
      {isLoading ? (
        <View>
          <Text>Products coming your way</Text>
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {fetchedProducts.products.length > 0 ? (
            <>
              {fetchedProducts.products.map(product => (
                <View
                  key={product.id} // Assuming there is an 'id' property in your product objects
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
                    {isFavorited ? (
                      <FilledHeartIcon
                        onPress={handleFavourites}
                        width={20}
                        height={20}
                        style={{marginTop: -80}}
                      />
                    ) : (
                      <HeartIcon
                        width={20}
                        height={20}
                        onPress={handleFavourites}
                        style={{marginTop: -80}}
                      />
                    )}
                    <Image
                      source={{
                        uri: product.images[0],
                      }}
                      style={{
                        width: '80%',
                        height: 100,
                        borderRadius: 8,
                        marginLeft: 10,
                      }}
                      resizeMode="cover"
                    />
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text>{product.price}$</Text>

                    {quantity > 0 ? (
                      <View
                        style={{
                          backgroundColor: Colors.white,
                          flexDirection: 'row',
                          marginLeft: 50,
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <View
                            style={{
                              backgroundColor: Colors.darkBlue,
                              borderRadius: 50,
                            }}>
                            <MinusIcon
                              onPress={handleQuantityDecrease}
                              width={20}
                              height={20}
                            />
                          </View>
                          <Text> {quantity}</Text>
                          <View
                            style={{
                              backgroundColor: Colors.darkBlue,
                              borderRadius: 50,
                              marginLeft: 5,
                            }}>
                            <PlusIcon
                              onPress={handleQuantityIncrease}
                              width={20}
                              height={20}
                            />
                          </View>
                        </View>
                      </View>
                    ) : (
                      <View
                        style={{
                          backgroundColor: Colors.darkBlue,
                          borderRadius: 50,
                          marginLeft: 80,
                        }}>
                        <PlusIcon
                          onPress={handleQuantityIncrease}
                          width={20}
                          height={20}
                        />
                      </View>
                    )}
                  </View>
                  <Text>{product.title}</Text>
                </View>
              ))}
            </>
          ) : (
            <View>
              <Text>No Prodcts</Text>
            </View>
          )}
        </View>
      )}
    </>
  );
};

export default Product;

import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {selectFavouriteProduct} from '../../redux/slices/favouriteSlice';
import {ProductComponent} from '../../components/product';

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const Favourite = () => {
  const favourites = useSelector(selectFavouriteProduct);

  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  console.log('Favourites', favourites);

  return (
    <>
      <View style={{margin:20}}>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Favourites</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {favourites.length > 0 ? (
          <>
            {favourites.map((product: Product) => (
              <ProductComponent
                key={product.id}
                product={product}
                favoriteProducts={favoriteProducts}
                setFavoriteProducts={setFavoriteProducts}
                showHeartIcon={false} 
              />
            ))}
          </>
        ) : (
          <View>
            <Text>No Products</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Favourite;

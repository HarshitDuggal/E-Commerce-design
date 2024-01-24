import {View, Text, StatusBar, ScrollView} from 'react-native';
import Header from '../../components/header/index';
import {Colors} from '../../constants/theme';
import FlashCard from '../../components/flashCard';
import {homeStyles} from './style';
import Product from '../../components/product';

const Home = () => {
  return (
    <View>
      <StatusBar backgroundColor={Colors.lightBlue} />
      <Header />
      <ScrollView style={homeStyles.scrollContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FlashCard />
          <FlashCard />
        </ScrollView>
        <Text
            style={[
              homeStyles.titleText,
              {color: Colors.gray6, marginTop: 27},
            ]}>
            Recommended
          </Text>
          <Product/>
      </ScrollView>
    </View>
  );
};

export default Home;

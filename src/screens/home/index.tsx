import {View, Text, StatusBar} from 'react-native';
import Header from '../../components/header/index';
import {Colors} from '../../constants/theme';

const Home = () => {
  return (
    <View>
      <StatusBar backgroundColor={Colors.lightBlue}/>
      <Header />
    </View>
  );
};

export default Home;

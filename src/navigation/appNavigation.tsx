//dependencies import
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//Screens import
import Categories from '../screens/categories';
import Favourite from '../screens/favourite';
import Home from '../screens/home';
import More from '../screens/more';
import Cart from '../screens/cart';
import ProductPage from '../screens/productPage';

//icons import
import {HomeIcon, CategoryIcon, HeartIcon, MoreIcon} from '../images/svg/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="CartScreen" component={Cart} />
      <Stack.Screen name="ProductPageScreen" component={ProductPage} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: HomeIcon,
        }}
        name="Home"
        component={MainStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: CategoryIcon,
        }}
        name="Categories"
        component={Categories}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: HeartIcon,
        }}
        name="Favourite"
        component={Favourite}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: MoreIcon,
        }}
        name="More"
        component={More}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;

import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {Colors} from '../../constants/theme';
import {BagIcon, DropDownIcon, SearchIcon} from '../../images/svg';
import headerStyles from './style';
import { useNavigation } from '@react-navigation/native';
const Header = () => {

  const multipleAddress = [
    'Green Way 3000, Sylhet',
    'House No.7, Jammu',
    'Golden Manor, Dehradun',
  ];
  const avaliableTimings = ['30 Mins', '1 Hour', '2 Hour'];
  
  const [search, setSearch] = useState('')
  const [address, setAddress] = useState(multipleAddress[0]);
  const [timings, setTimings] = useState(avaliableTimings[0]);

  const navigation = useNavigation();
  const handleSearch = () => {
    
    console.log("Hello i am gere");
    
  }

  const toggleTiming = () => {
    console.log("hgELLO IT IS DROPDOWN");
    
  }
  const toggleAddress = () => {
    console.log("Hello this is clicked");
    
  }

  const handleCart = () => {
    navigation.navigate('CartScreen' as never)
  }
  return (
    <View style={headerStyles.headerContainer}>
      <View style={headerStyles.titleContainer}>
        <Text style={headerStyles.titleText}>Hey, Rahul</Text>
        <BagIcon onPress={handleCart} />
      </View>
      <View style={headerStyles.searchBarContainer}>
        <SearchIcon height={18} width={18} style={headerStyles.searchIcon} />
        <TextInput
          style={headerStyles.searchBar}
          placeholder="Search Products or store"
          value={search}
          onChangeText={handleSearch}
          placeholderTextColor={Colors.gray3}
        />
      </View>
      <View style={headerStyles.buttonContainer}>
          <View>
            <Text style={headerStyles.smallText}>DELIVERY TO</Text>
            <TouchableOpacity onPress={toggleAddress}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={headerStyles.addressText}>{address}</Text>
                <DropDownIcon />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={headerStyles.smallText}>WITHIN</Text>
            <TouchableOpacity onPress={toggleTiming}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={headerStyles.addressText}>{timings}</Text>
                <DropDownIcon />
              </View>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
};

export default Header;

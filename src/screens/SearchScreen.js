import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {getCityRecomendations} from '../services/getCityRecomendations';
import {useDispatch, useSelector} from 'react-redux';
import {getWeatherDataByLocation} from '../redux/weatherData';
import {addToRecentSearch} from '../redux/recentSearch';

const SearchScreen = ({navigation}) => {
  const [inputText, setInputText] = useState('');
  const [searchList, setSearchList] = useState([]);
  const dispatch = useDispatch();
  const {isLoading, error, currentWeatherDetails} = useSelector(
    state => state.weatherData,
  );

  const handelTextChange = async value => {
    setInputText(() => setInputText(value));
    if (inputText !== '') {
      let data = await getCityRecomendations(inputText);
      setSearchList(data);
    } else {
      setSearchList([]);
    }
  };

  const handelSearch = city => {
    dispatch(getWeatherDataByLocation(city));
    if (isLoading === false && error.length === 0) {
      const recentSearchDetails = {
        id: currentWeatherDetails.location.name,
        location: {
          name: currentWeatherDetails.location.name,
          region: currentWeatherDetails.location.region,
        },
        temperature: currentWeatherDetails.current.temp_c,
        description: currentWeatherDetails.current.condition.text,
        icon: currentWeatherDetails.current.condition.icon.substr(
          2,
          currentWeatherDetails.current.condition.icon.length,
        ),
        isFavourite: false,
      };
      dispatch(addToRecentSearch(recentSearchDetails));
      navigation.navigate('Home');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/background_android.png')}
      resizeMode="cover"
      style={styles.background}>
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/icon_back_black.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Search for City"
            style={styles.textInput}
            onChangeText={value => handelTextChange(value)}
            value={inputText}
          />
          {inputText !== '' && (
            <TouchableOpacity onPress={() => setInputText('')}>
              <Image
                source={require('../../assets/icon_clear.png')}
                style={styles.clearLogo}
              />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
      <View style={styles.searchListContainer}>
        {Array.isArray(searchList) &&
          searchList.map(city => (
            <View style={styles.listView} key={city.id}>
              <TouchableOpacity onPress={() => handelSearch(city.name)}>
                <Text style={styles.text}>{city.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 56,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  logo: {
    width: 18,
    height: 18,
  },
  textInput: {
    paddingLeft: 36,
    width: '90%',
    color: '#707070',
    fontSize: 14,
  },
  clearLogo: {
    width: 14,
    height: 14,
    marginRight: 26,
  },
  searchListContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listView: {
    width: '100%',
    paddingLeft: 16,
    height: 49,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  text: {
    color: '#707070',
    fontSize: 14,
  },
});

export default SearchScreen;

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import ListView from '../components/ListView';
import {useDispatch, useSelector} from 'react-redux';
import {removeAllFavourite, removeFromFavourite} from '../redux/favoutite';
import {
  getWeatherDataByLocation,
  unMarkAsFavourite,
} from '../redux/weatherData';
import {changeFavouriteStatus} from '../redux/recentSearch';

const FavouriteScreen = ({navigation}) => {
  const {favouriteList} = useSelector(state => state.favourite);
  const dispatch = useDispatch();

  const createTwoButtonAlert = () =>
    Alert.alert('', 'Are you sure want to remove all the favourites?', [
      {
        text: 'No',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          dispatch(removeAllFavourite());
          return dispatch(unMarkAsFavourite());
        },
      },
    ]);

  const favouriteStatus = id => {
    dispatch(removeFromFavourite(id));
    dispatch(changeFavouriteStatus(id));
    return dispatch(unMarkAsFavourite());
  };

  const getDetailsFromFavourite = city => {
    dispatch(getWeatherDataByLocation(city));
    navigation.navigate('Home');
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => getDetailsFromFavourite(item.location?.name)}>
        <ListView
          location={`${item.location?.name}, ${item.location?.region}`}
          description={item.description}
          temperature={item.temperature}
          id={item.id}
          favouriteStatus={() => favouriteStatus(item.id)}
          icon={item.icon}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/background_android.png')}
      resizeMode="cover"
      style={styles.background}>
      <SafeAreaView style={styles.background}>
        <AppBar navigation={navigation} />
        {favouriteList.length === 0 ? (
          <View style={styles.nothingFoundContainer}>
            <Image
              source={require('../../assets/icon_nothing.png')}
              style={styles.nothingFoundImage}
            />
            <Text style={styles.text}>No Favourites added</Text>
          </View>
        ) : (
          <>
            <View style={styles.cityCount}>
              <Text style={styles.primaryText}>
                {favouriteList.length} City added as favourite
              </Text>
              <TouchableOpacity onPress={createTwoButtonAlert}>
                <Text
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={[styles.primaryText, {fontFamily: 'Roboto-Medium'}]}>
                  Remove All
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.list}>
              <FlatList
                data={favouriteList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  cityCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  primaryText: {
    fontSize: 13,
    lineHeight: 15,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 8,
    flex: 1,
  },
  nothingFoundImage: {
    width: 159,
    height: 84,
  },
  nothingFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    color: '#FFFFFF',
    marginTop: 25,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
});

export default FavouriteScreen;

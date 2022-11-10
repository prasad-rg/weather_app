import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import ListView from '../components/ListView';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavourite, removeFromFavourite} from '../redux/favoutite';
import {
  changeFavouriteStatus,
  clearAllRecentSearch,
} from '../redux/recentSearch';
import {getWeatherDataByLocation} from '../redux/weatherData';

const RecentSearchScreen = ({navigation}) => {
  const isPresent = true;
  const {recentSearchList} = useSelector(state => state.recentSearch);
  const dispatch = useDispatch();
  const favouriteStatus = item => {
    if (item.isFavourite) {
      dispatch(removeFromFavourite(item.id));
      dispatch(changeFavouriteStatus(item.id));
    } else {
      dispatch(addToFavourite(item));
      dispatch(changeFavouriteStatus(item.id));
    }
  };
  const getDetailsFromRecentSearch = city => {
    dispatch(getWeatherDataByLocation(city));
    navigation.navigate('Home');
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => getDetailsFromRecentSearch(item.location?.name)}>
        <ListView
          location={`${item.location?.name}, ${item.location?.region}`}
          description={item.description}
          temperature={item.temperature}
          id={item.id}
          favouriteStatus={() => favouriteStatus(item)}
          isFavourite={item.isFavourite}
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
        <AppBar navigation={navigation} title="Recent Search" />
        {!isPresent ? (
          <View style={styles.nothingFoundContainer}>
            <Image
              source={require('../../assets/icon_nothing.png')}
              style={styles.nothingFoundImage}
            />
            <Text style={styles.text}>No Recent Search</Text>
          </View>
        ) : (
          <>
            <View style={styles.cityCount}>
              <Text style={styles.primaryText}>You recently searched for</Text>
              <TouchableOpacity
                onPress={() => dispatch(clearAllRecentSearch())}>
                <Text style={styles.primaryText}>Clear All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.list}>
              <FlatList
                data={recentSearchList}
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
    padding: 16,
  },
  primaryText: {
    fontSize: 13,
    lineHeight: 15,
    color: '#FFFFFF',
  },
  list: {
    padding: 16,
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
  },
});

export default RecentSearchScreen;

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import InfoBox from '../components/InfoBox';
import CurrentWeatherBox from '../components/CurrentWeatherBox';
import {useDispatch, useSelector} from 'react-redux';
import {
  getWeatherDataByLocation,
  markAsFavourite,
  unMarkAsFavourite,
} from '../redux/weatherData';
import moment from 'moment';
import {addToFavourite, removeFromFavourite} from '../redux/favoutite';
// import {addToRecentSearch} from '../redux/recentSearch';

const HomeScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {displayedWeatherDetails, isLoading} = useSelector(
    state => state.weatherData,
  );

  // const appendToRecentsearch = () => {
  //   if (!isLoading && !displayedWeatherDetails?.error) {
  //     if (route?.params?.isFromSearch) {
  //       const recentSearchDetails = {
  //         id: displayedWeatherDetails.location.name,
  //         location: {
  //           name: displayedWeatherDetails.location.name,
  //           region: displayedWeatherDetails.location.region,
  //         },
  //         temperature: displayedWeatherDetails.current.temp_c,
  //         description: displayedWeatherDetails.current.condition.text,
  //         icon: displayedWeatherDetails.current.condition.icon.substr(
  //           2,
  //           displayedWeatherDetails.current.condition.icon.length,
  //         ),
  //         isFavourite: false,
  //       };
  //       dispatch(addToRecentSearch(recentSearchDetails));
  //     }
  //   }
  // };

  const addToFavouriteList = () => {
    if (displayedWeatherDetails?.isFavourite === false) {
      const markDetailAsFavourite = {
        id: displayedWeatherDetails.location.name,
        location: {
          name: displayedWeatherDetails.location.name,
          region: displayedWeatherDetails.location.region,
        },
        temperature: displayedWeatherDetails.current.temp_c,
        description: displayedWeatherDetails.current.condition.text,
        icon: displayedWeatherDetails.current.condition.icon.substr(
          2,
          displayedWeatherDetails.current.condition.icon.length,
        ),
        isFavourite: true,
      };
      dispatch(addToFavourite(markDetailAsFavourite));
      dispatch(markAsFavourite());
    } else {
      dispatch(removeFromFavourite(displayedWeatherDetails.location.name));
      dispatch(unMarkAsFavourite());
    }
  };

  useEffect(() => {
    if (!displayedWeatherDetails?.current) {
      dispatch(getWeatherDataByLocation('udupi'));
    }
  }, []);
  const [valuesInDegrees, setValuesInDegrees] = useState(true);
  return (
    <ImageBackground
      source={require('../../assets/background_android.png')}
      resizeMode="cover"
      style={styles.background}>
      <SafeAreaView style={styles.containerAndroid}>
        <View style={styles.navbar}>
          <Navbar navigation={navigation} />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.centeredView}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#75889F" />
            ) : displayedWeatherDetails?.error ? (
              <Text style={styles.locationText}>
                {displayedWeatherDetails?.error.message} {'\n'}
                'Please Search Again'
              </Text>
            ) : (
              <>
                <View style={styles.detailsContainer}>
                  <Text style={styles.dateAndTimeText}>
                    {`${moment().format('llll').toUpperCase()}`}
                  </Text>
                  <Text style={styles.locationText}>
                    {displayedWeatherDetails?.location?.name},{' '}
                    {displayedWeatherDetails?.location?.region}
                  </Text>
                  <TouchableOpacity onPress={() => addToFavouriteList()}>
                    <View style={styles.favourite}>
                      <Image
                        source={
                          !displayedWeatherDetails?.isFavourite
                            ? require('../../assets/icon_favourite.png')
                            : require('../../assets/icon_favourite_active.png')
                        }
                        style={styles.favouriteImage}
                      />
                      <Text style={styles.text}>Add to favourite</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.infoBox}>
                  <CurrentWeatherBox
                    temperature={{
                      degree: displayedWeatherDetails?.current?.temp_c,
                      fahrenheit: displayedWeatherDetails?.current?.temp_f,
                    }}
                    condition={
                      displayedWeatherDetails?.current?.condition?.text
                    }
                    icon={displayedWeatherDetails?.current?.condition?.icon.substr(
                      2,
                      displayedWeatherDetails?.current.condition.icon.length,
                    )}
                    onPress={() => setValuesInDegrees(!valuesInDegrees)}
                    valueIndegrees={valuesInDegrees}
                  />
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.bottomDetails}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <InfoBox
            title="Min - Max"
            value={
              displayedWeatherDetails?.error
                ? ''
                : valuesInDegrees
                ? `${Math.floor(
                    displayedWeatherDetails?.current?.temp_c - 2,
                  )}º - ${displayedWeatherDetails?.current?.temp_c + 2}º`
                : `${Math.floor(
                    displayedWeatherDetails?.current?.temp_f - 2,
                  )}º - ${displayedWeatherDetails?.current?.temp_f + 2}º`
            }
            logoSize={{width: 13, height: 26}}
          />
          <InfoBox
            title="Precipitation"
            value={
              displayedWeatherDetails?.error
                ? ''
                : `${displayedWeatherDetails?.current?.precip_mm}%`
            }
            source={require('../../assets/icon_precipitation_info.png')}
            logoSize={{width: 24, height: 23}}
          />
          <InfoBox
            title="Humidity"
            value={
              displayedWeatherDetails?.error
                ? ''
                : `${displayedWeatherDetails?.current?.humidity}%`
            }
            source={require('../../assets/icon_humidity_info.png')}
            logoSize={{width: 15, height: 20}}
          />
          <InfoBox
            title="Wind"
            value={
              displayedWeatherDetails?.error
                ? ''
                : `${displayedWeatherDetails?.current?.wind_kph} km/h`
            }
            source={require('../../assets/icon_wind_info.png')}
            logoSize={{width: 20, height: 17}}
          />
          <InfoBox
            title="Visibility"
            value={
              displayedWeatherDetails?.error
                ? ''
                : `${displayedWeatherDetails?.current?.vis_km} km`
            }
            source={require('../../assets/icon_visibility_info.png')}
            logoSize={{width: 26, height: 17}}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerAndroid: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  containerIOS: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  navbar: {
    flexDirection: 'row',
    marginBottom: 54,
    padding: 16,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  favourite: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    alignItems: 'center',
  },
  favouriteImage: {
    width: 18,
    height: 17,
    marginRight: 7,
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },
  dateAndTimeText: {
    opacity: 0.6,
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 1.5,
    marginBottom: 10,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
  },
  locationText: {
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Roboto-Medium',
  },
  infoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 81,
    width: 119,
    // height: 175,
  },
  bottomDetails: {
    flexDirection: 'row',
    borderTopWidth: 0.2,
    borderColor: '#FFFFFF',
    width: '100%',
    height: 100,
    marginBottom: 10,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
});

export default HomeScreen;

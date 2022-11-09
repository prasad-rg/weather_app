import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
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

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {displayedWeatherDetails} = useSelector(state => state.weatherData);
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
    if (!displayedWeatherDetails.current) {
      dispatch(getWeatherDataByLocation('udupi'));
    }
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/background_android.png')}
      resizeMode="cover"
      style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.navbar}>
          <Navbar navigation={navigation} />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.centeredView}>
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
              {/* <Text>Info Box</Text> */}
              <CurrentWeatherBox
                temperature={{
                  degree: displayedWeatherDetails?.current?.temp_c,
                  fahrenheit: displayedWeatherDetails?.current?.temp_f,
                }}
                condition={displayedWeatherDetails?.current.condition.text}
                icon={displayedWeatherDetails?.current.condition.icon.substr(
                  2,
                  displayedWeatherDetails?.current.condition.icon.length,
                )}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.bottomDetails}>
        <ScrollView horizontal>
          <InfoBox
            title="Min - Max"
            value={`${Math.floor(
              displayedWeatherDetails?.current?.temp_c - 2,
            )}º - ${displayedWeatherDetails?.current?.temp_c + 2}º`}
            logoSize={{width: 13, height: 26}}
          />
          <InfoBox
            title="Precipitation"
            value={`${displayedWeatherDetails?.current?.precip_mm}%`}
            source={require('../../assets/icon_precipitation_info.png')}
            logoSize={{width: 24, height: 23}}
          />
          <InfoBox
            title="Humidity"
            value={`${displayedWeatherDetails?.current?.humidity}%`}
            source={require('../../assets/icon_humidity_info.png')}
            logoSize={{width: 15, height: 20}}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
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
  },
  dateAndTimeText: {
    opacity: 0.6,
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 1.5,
    marginBottom: 10,
    color: '#FFFFFF',
  },
  locationText: {
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  infoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 81,
    width: 119,
    height: 175,
  },
  bottomDetails: {
    flexDirection: 'row',
    borderTopWidth: 0.2,
    borderColor: '#FFFFFF',
    width: '100%',
    height: 100,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
});

export default HomeScreen;

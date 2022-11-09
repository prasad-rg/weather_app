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
import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import InfoBox from '../components/InfoBox';
import CurrentWeatherBox from '../components/CurrentWeatherBox';
import {useDispatch, useSelector} from 'react-redux';
import {getWeatherDataByLocation} from '../redux/weatherData';
import moment from 'moment';

const HomeScreen = ({navigation}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const dispatch = useDispatch();
  const {currentWeatherDetails} = useSelector(state => state.weatherData);
  const addToFavourite = () => {
    // setIsFavourite(value => !value);
    dispatch(getWeatherDataByLocation('gulbarga'));
  };

  useEffect(() => {
    dispatch(getWeatherDataByLocation('udupi'));
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
                {currentWeatherDetails?.location?.name},{' '}
                {currentWeatherDetails?.location?.region}
              </Text>
              <TouchableOpacity onPress={() => addToFavourite()}>
                <View style={styles.favourite}>
                  <Image
                    source={
                      !isFavourite
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
                  degree: currentWeatherDetails?.current?.temp_c,
                  fahrenheit: currentWeatherDetails?.current?.temp_f,
                }}
                condition={currentWeatherDetails?.current?.condition.text}
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
              currentWeatherDetails?.current?.temp_c - 2,
            )}º - ${currentWeatherDetails?.current?.temp_c}º`}
            logoSize={{width: 13, height: 26}}
          />
          <InfoBox
            title="Precipitation"
            value={`${currentWeatherDetails?.current?.precip_mm}%`}
            source={require('../../assets/icon_precipitation_info.png')}
            logoSize={{width: 24, height: 23}}
          />
          <InfoBox
            title="Humidity"
            value={`${currentWeatherDetails?.current?.humidity}%`}
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

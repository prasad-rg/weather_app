import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {removeFromFavourite} from '../redux/favoutite';

const ListView = ({
  location = 'Udupi, Karnataka',
  temperature = '31',
  source,
  description = 'Mostly Sunny',
  id,
}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.primaryText}>{location}</Text>
        <View style={styles.infoContainer}>
          <Image
            source={require('../../assets/icon_mostly_sunny_small.png')}
            style={styles.weatherLogo}
          />
          <Text style={styles.temperatureText}>{temperature}</Text>
          <Text style={styles.degreeSymbol}>ºC</Text>
          <Text style={styles.weatherIsLikely}>{description}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => dispatch(removeFromFavourite(id))}>
        <Image
          source={require('../../assets/icon_favourite_active.png')}
          style={styles.favouriteLogo}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 0.2,
    borderColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    marginBottom: 2,
  },
  detailsContainer: {
    paddingLeft: 15,
    paddingTop: 15,
  },
  primaryText: {
    color: '#FFE539',
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '800',
  },
  weatherLogo: {
    width: 24,
    height: 24,
  },
  infoContainer: {
    marginTop: 10,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginLeft: 9,
  },
  degreeSymbol: {
    fontSize: 13,
    color: '#FFFFFF',
    marginLeft: 2,
    marginRight: 17,
  },
  weatherIsLikely: {
    color: '#FFFFFF',
  },
  favouriteLogo: {
    width: 18,
    height: 17,
  },
});

export default ListView;

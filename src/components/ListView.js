import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ListView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.primaryText}>Udupi, Karnataka</Text>
        <View style={styles.infoContainer}>
          <Image
            source={require('../../assets/icon_mostly_sunny_small.png')}
            style={styles.weatherLogo}
          />
          <Text style={styles.temperatureText}>31</Text>
          <Text style={styles.degreeSymbol}>ºC</Text>
          <Text style={styles.weatherIsLikely}>Mostly Sunny</Text>
        </View>
      </View>
      <Image
        source={require('../../assets/icon_favourite_active.png')}
        style={styles.favouriteLogo}
      />
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

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CurrentWeatherBox = ({
  temperature,
  condition,
  icon,
  onPress,
  valueIndegrees = true,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={
          icon
            ? {uri: `https://${icon}`}
            : require('../../assets/icon_mostly_cloudy_big.png')
        }
        style={styles.weatherLogo}
      />
      <View style={styles.weatherInfo}>
        <Text style={styles.temperature}>
          {valueIndegrees ? temperature.degree : temperature.fahrenheit}
        </Text>
        <View style={styles.toggleButton}>
          <TouchableOpacity
            style={valueIndegrees ? styles.units : styles.inActiveUnit}
            // onPress={() => setValueInDegrees(inDegrees => !inDegrees)}
            onPress={onPress}>
            <Text
              style={
                valueIndegrees ? styles.unitsText : styles.inActiveUnitText
              }>
              ºC
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={valueIndegrees ? styles.inActiveUnit : styles.units}
            onPress={onPress}>
            <Text
              style={
                valueIndegrees ? styles.inActiveUnitText : styles.unitsText
              }>
              ºF
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.weatherDiscription}>{condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherLogo: {
    width: 75,
    height: 75,
  },
  temperature: {
    color: '#FFFFFF',
    fontSize: 52,
    lineHeight: 61,
    fontFamily: 'Roboto-Medium',
  },
  weatherInfo: {
    flexDirection: 'row',
    width: 119,
    height: 61,
    alignItems: 'baseline',
    marginTop: 15,
    justifyContent: 'center',
    paddingBottom: 8,
  },
  toggleButton: {
    width: 55,
    height: 30,
    marginLeft: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 2,
    overflow: 'hidden',
  },
  units: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 28,
  },
  unitsText: {
    color: '#E32843',
  },
  inActiveUnit: {
    backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 28,
  },
  inActiveUnitText: {
    color: '#FFFFFF',
  },
  weatherDiscription: {
    marginTop: 11,
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 21,
  },
});
export default CurrentWeatherBox;

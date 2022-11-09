import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CurrentWeatherBox = () => {
  const [valueIndegrees, setValueInDegrees] = useState(true);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icon_mostly_cloudy_big.png')}
        style={styles.weatherLogo}
      />
      <View style={styles.weatherInfo}>
        <Text style={styles.temperature}>31</Text>
        <View style={styles.toggleButton}>
          <TouchableOpacity
            style={valueIndegrees ? styles.units : styles.inActiveUnit}
            onPress={() => setValueInDegrees(inDegrees => !inDegrees)}>
            <Text
              style={
                valueIndegrees ? styles.unitsText : styles.inActiveUnitText
              }>
              ºC
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={valueIndegrees ? styles.inActiveUnit : styles.units}
            onPress={() => setValueInDegrees(inDegrees => !inDegrees)}>
            <Text
              style={
                valueIndegrees ? styles.inActiveUnitText : styles.unitsText
              }>
              ºF
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.weatherDiscription}>Mostly Rainy</Text>
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
    height: 50,
  },
  temperature: {
    color: '#FFFFFF',
    fontSize: 52,
    lineHeight: 61,
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

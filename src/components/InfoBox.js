import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const InfoBox = ({
  title = 'Title',
  source = require('../../assets/icon_temperature_info.png'),
  value = '22 - 30',
  logoSize,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={source} style={[styles.logo, logoSize]} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.primaryText]}>{title}</Text>
        <Text style={[styles.text, styles.secondaryText]}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 94,
    height: 41,
    flexDirection: 'row',
    marginVertical: 30,
    marginHorizontal: 18,
  },
  logo: {
    width: 24,
    height: 24,
  },
  logoContainer: {
    marginRight: 15,
  },
  text: {
    color: '#FFFFFF',
    marginBottom: 5,
  },
  primaryText: {
    fontSize: 13,
    lineHeight: 15,
  },
  secondaryText: {
    fontSize: 18,
    lineHeight: 21,
  },
  textContainer: {},
});

export default InfoBox;

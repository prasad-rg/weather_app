import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import Navbar from '../components/Navbar';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/background_android.png')}
      resizeMode="cover"
      style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.navbar}>
          <Navbar />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.dateAndTimeText}>
            {'Wed, 28 Nov 2018 11:35 AM'.toUpperCase()}
          </Text>
          <Text style={styles.locationText}>Udupi, Karnataka</Text>
          <View style={styles.favourite}>
            <Image
              source={require('../../assets/icon_favourite.png')}
              style={styles.favouriteImage}
            />
            <Text style={styles.text}>Add to favourite</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <Text>Info Box</Text>
        </View>
      </SafeAreaView>
      <View style={styles.bottomDetails}>
        <Text>Info Box</Text>
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
  },
  favourite: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
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
    borderWidth: 1,
    borderColor: '#FFFFFF',
    width: 119,
    height: 175,
  },
  bottomDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0.2,
    borderColor: '#FFFFFF',
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
});

export default HomeScreen;

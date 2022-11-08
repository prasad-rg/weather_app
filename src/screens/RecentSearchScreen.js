import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ListView from '../components/ListView';

const RecentSearchScreen = ({navigation}) => {
  const isPresent = true;
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
              <TouchableOpacity>
                <Text style={styles.primaryText}>Clear All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.list}>
              <ListView />
              <ListView />
              <ListView />
              <ListView />
              <ListView />
            </ScrollView>
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

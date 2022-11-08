import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ListView from '../components/ListView';

const FavouriteScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/background_android.png')}
      resizeMode="cover"
      style={styles.background}>
      <SafeAreaView>
        <AppBar navigation={navigation} />
        <View style={styles.cityCount}>
          <Text style={styles.primaryText}>6 City added as favourite</Text>
          <TouchableOpacity>
            <Text style={styles.primaryText}>Remove All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.list}>
          <ListView />
          <ListView />
          <ListView />
          <ListView />
          <ListView />
        </ScrollView>
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
});

export default FavouriteScreen;

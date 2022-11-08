import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ListView from '../components/ListView';
import {useSelector} from 'react-redux';

const FavouriteScreen = ({navigation}) => {
  const isPresent = true;

  const {favouriteList} = useSelector(state => state.favourite);
  console.log(favouriteList);

  const createTwoButtonAlert = () =>
    Alert.alert('', 'Are you sure want to remove all the favourites?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <ImageBackground
      source={require('../../assets/background_android.png')}
      resizeMode="cover"
      style={styles.background}>
      <SafeAreaView style={styles.background}>
        <AppBar navigation={navigation} />
        {!isPresent ? (
          <View style={styles.nothingFoundContainer}>
            <Image
              source={require('../../assets/icon_nothing.png')}
              style={styles.nothingFoundImage}
            />
            <Text style={styles.text}>No Favourites added</Text>
          </View>
        ) : (
          <>
            <View style={styles.cityCount}>
              <Text style={styles.primaryText}>6 City added as favourite</Text>
              <TouchableOpacity onPress={createTwoButtonAlert}>
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

export default FavouriteScreen;

import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icon_back_black.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TextInput placeholder="Search for City" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  logo: {
    width: 18,
    height: 18,
  },
});

export default SearchScreen;

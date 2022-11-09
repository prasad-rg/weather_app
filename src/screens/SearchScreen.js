import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const SearchScreen = ({navigation}) => {
  const [inputText, setInputText] = useState('');

  const handelTextChange = value => {
    setInputText(() => setInputText(value));
  };

  return (
    <ImageBackground
      source={require('../../assets/background_android.png')}
      resizeMode="cover"
      style={styles.background}>
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/icon_back_black.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Search for City"
            style={styles.textInput}
            onChangeText={value => handelTextChange(value)}
            value={inputText}
          />
          {inputText !== '' && (
            <TouchableOpacity onPress={() => setInputText('')}>
              <Image
                source={require('../../assets/icon_clear.png')}
                style={styles.clearLogo}
              />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
      <View style={styles.searchListContainer}>
        <View style={styles.listView}>
          <Text style={styles.text}>Test</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.1,
    height: 56,
  },
  logo: {
    width: 18,
    height: 18,
  },
  textInput: {
    paddingLeft: 36,
    width: '90%',
    color: '#707070',
    fontSize: 14,
  },
  clearLogo: {
    width: 14,
    height: 14,
    marginRight: 26,
  },
  searchListContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listView: {
    width: '100%',
    paddingLeft: 16,
    height: 49,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  text: {
    color: '#707070',
    fontSize: 14,
  },
});

export default SearchScreen;

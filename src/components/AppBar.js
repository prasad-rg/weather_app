import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AppBar = ({navigation, title = 'Favourite'}) => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../assets/icon_back_black.png')}
            style={styles.backButton}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity>
        <Image
          source={require('../../assets/icon_search_white.png')}
          style={styles.searchLogo}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 26,
    justifyContent: 'space-between',
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 16,
    height: 16,
    marginRight: 34,
  },
  searchLogo: {
    tintColor: 'black',
    width: 18,
    height: 18,
  },
  text: {
    color: '#292F33',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
  },
});

export default AppBar;

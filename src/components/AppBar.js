import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerActions} from '@react-navigation/native';

const AppBar = ({navigation, title = 'Favourite'}) => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.jumpTo('Home'))}>
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
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
    fontFamily: 'Roboto-Medium',
  },
});

export default AppBar;

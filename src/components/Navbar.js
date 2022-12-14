import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerActions} from '@react-navigation/native';

const Navbar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuHolder}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image
            source={require('../../assets/icon_menu_white.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Image
          source={require('../../assets/icon_search_white.png')}
          style={styles.search}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 18,
    height: 12,
    marginRight: 32,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'white',
    width: '100%',
    justifyContent: 'space-between',
  },
  logo: {
    width: 113,
    height: 24,
  },
  search: {
    width: 18,
    height: 18,
  },
  menuHolder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Navbar;

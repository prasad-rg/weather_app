import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuHolder}>
        <Image
          source={require('../../assets/icon_menu_white.png')}
          style={styles.image}
        />
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <Image
        source={require('../../assets/icon_search_white.png')}
        style={styles.search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
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
    width: 24,
    height: 24,
  },
  menuHolder: {
    flexDirection: 'row',
  },
});

export default Navbar;

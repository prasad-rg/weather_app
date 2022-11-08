import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return <HomeScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default App;

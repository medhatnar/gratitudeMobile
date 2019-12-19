import React from 'react';
import * as Font from 'expo-font';
import { Text, StyleSheet, View } from 'react-native';
import { Header } from './Header';
import { Card } from './Card';

const HomeScreen = () => {
  // Font.loadAsync({
  //   'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
  // });

  return (
    <View style={styles.text} >
      <Header name="Ryan" />
      <Card innerText="here's some test text"/>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    // fontFamily: 'open-sans-bold',
  }
});

export default HomeScreen;

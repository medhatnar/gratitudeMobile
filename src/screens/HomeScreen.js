import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native';
import * as forestFloor from '../assets/forest-floor.jpg';
import { Header } from './Header';
import { Card } from './card';

const Menu = () => {
  return (
    <View>
      <Card innerText="Ocean waves"/>
      <Card innerText="Rain"/>
      <Card innerText="White noise"/>
      <Card innerText="Nature"/>
    </View>
  );
}

class HomeScreen extends React.Component {

state = {
  showTimer: false
}
render () {
  console.log(this.state.showTimer)

  return (
    <View>
     {
       this.state.showTimer ? <ShowTimer /> :
       <View>
       <Header name="Ryan" />
         <Card pressAction={() => this.setState({showTimer: !this.state.showTimer})} innerText="Ocean waves"/>
         <Card innerText="Rain"/>
         <Card innerText="White noise"/>
         <Card innerText="Nature"/>
        </View>
       }
    </View>
  )
}
};

export default HomeScreen;

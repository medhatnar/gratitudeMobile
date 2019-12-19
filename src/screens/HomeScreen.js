import React from 'react';
import * as Font from 'expo-font';
import { Text, StyleSheet, View } from 'react-native';
import { Header } from './Header';
import { Card } from './Card';

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
    <View style={styles.text} >
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

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    // fontFamily: 'open-sans-bold',
  }
});

export default HomeScreen;

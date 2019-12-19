import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Header } from './Header';
import { Card } from './card';
import { BackgroundImage } from './BackgroundImage';

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
    <BackgroundImage
			source={require('../assets/forest-floor.jpg')}
		>
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
    </BackgroundImage>
  )
}
};

export default HomeScreen;

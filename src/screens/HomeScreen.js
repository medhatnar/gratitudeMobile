import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native';
import * as forestFloor from '../assets/forest-floor.jpg';
import { Header } from './Header';
import { BackgroundImage } from './BackgroundImage';

const HomeScreen = () => {
	return (
		<BackgroundImage
			source={require('../assets/forest-floor.jpg')}
		>
			<View>
				<Header name='Ryan' />
			</View>
		</BackgroundImage>
	);
};

export default HomeScreen;

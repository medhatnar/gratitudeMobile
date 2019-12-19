import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native';
import * as forestFloor from '../assets/forest-floor.jpg';
import { Header } from './Header';
import { BackgroundImage } from './BackgroundImage';

const HomeScreen = () => {
	return (
		<BackgroundImage
			style={styles.backgroundImage}
			source={require('../assets/forest-floor.jpg')}
		>
			<View style={styles.text}>
				<Header name='Ryan' />
			</View>
		</BackgroundImage>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		fontFamily: 'sans-serif-medium',
	},
});

export default HomeScreen;

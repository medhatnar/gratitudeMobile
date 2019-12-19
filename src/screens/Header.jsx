import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const timeOfDay = () => {
    let currentDate = new Date(Date.now());
    let hour = Number(currentDate.getHours());

    if(hour >= 0 && hour < 12) {
        return "morning";
    } else if(hour >= 12 && hour <= 17) {
        return "afternoon";
    } else {
        return "evening";
    }
    
}

export const Header = props => {
  return (
    <View>
        <Text>Good {timeOfDay()} {props.name}</Text>
        <Text>Choose your meditation for today.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});
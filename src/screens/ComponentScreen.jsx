import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
	return (
		<View>
			<Text style={styles.textStyle}>component screen here</Text>
            <Text>something something</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 50,
		color: 'pink',
	},
});

export default ComponentScreen;

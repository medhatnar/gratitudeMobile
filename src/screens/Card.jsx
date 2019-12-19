import React from 'react';
import { Text, StyleSheet, Button, View} from 'react-native';


export const Card = props => {
  return(
    <View style={styles.viewStyle}>

    <Button
              title={props.innerText}
              onPress={props.pressAction}
            />

    </View>
  );
};


const styles = StyleSheet.create({
  viewStyle:{
    backgroundColor:  "white",
    borderRadius: 20,
    overflow: "hidden",
    borderColor:"black",
    borderWidth: 4,
    // width:400,
    // height:200,
  },
  textStyle:{
      fontSize: 20,
      color:"black",
      textAlign:"center",
      textAlignVertical:"center",
      padding:10,
      margin:0,
  }
});

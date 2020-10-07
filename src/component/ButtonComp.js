import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
      style={styles.btnView}
      onPress={() => props.onButtonPress()}>
      <View><Text style={styles.btnText}>{props.buttonText}</Text></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    btnView : {
        height:42,
        width: 128,
        borderRadius:5,
        backgroundColor: '#0052CC',
        justifyContent:'center',
        alignItems:'center',
    },

    btnText: {
        color:'#FFF',
        fontSize: 14,
        fontWeight:'bold',
        letterSpacing:1,
        fontFamily: 'Open Sans',
    }

})

export default Button;
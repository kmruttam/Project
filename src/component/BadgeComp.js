import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Badge = (props) => {
  return (
    <View style={styles.badgeStyle}>
      {props.imgSrc != undefined ? (
        <Image style={{height: 20, width: 20}} source={props.imgSrc} />
      ) : null}
      {props.imgSrc && props.count != undefined ? (
        <Text style={[styles.badgeText, {marginLeft: 5}]}>{props.count}</Text>
      ) : (
        <Text style={styles.badgeText}>{props.count}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  badgeStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    width: 'auto',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderColor: '#0052cc',
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 20,
    color: '#0052cc',
  },
});

/*
=> PROPS
  imgSrc
  count
*/

export default Badge;

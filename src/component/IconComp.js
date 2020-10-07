import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Icon = (props) => {
  return (
    <Image
      style={[
        styles.iconImage,
        {
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
        },
      ]}
      source={props.icon}
    />
  );
};

const styles = StyleSheet.create({
  iconImage: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 80,
    width: 80,
    borderRadius: 300/10,
  },
});

export default Icon;

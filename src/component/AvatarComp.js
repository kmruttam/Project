import { View } from 'native-base';
import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

const Avatar = (props) => {
  return (
    <View style={{flex:1}}>
    <TouchableOpacity onPress={() => props.onAvatarPress()}>
      <Image
        style={[
          styles.avatarImg,
          {
            borderWidth: props.borderWidth,
            borderColor: props.borderColor,
          },
        ]}
        source={props.avatar}
      />
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarImg: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
});

/*
 => Props
  onAvatarPress
  avatar
  borderWidth
  borderColor
*/

export default Avatar;
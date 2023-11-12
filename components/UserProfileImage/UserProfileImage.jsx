import {View, Text, Image} from 'react-native';
import React from 'react';
import {UserProfileStyle} from './UserProfileImage.style';

const UserProfileImage = ({profileImages}) => {
  return (
    <View style={UserProfileStyle.userStoryImage}>
      <Image source={profileImages} style={UserProfileStyle.image} />
    </View>
  );
};

export default UserProfileImage;

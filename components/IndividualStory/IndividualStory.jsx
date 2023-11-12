import {View, Text, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {IndividualStoryStyle} from './IndividualStory.style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const IndividualStory = props => {
  const {
    item: {firstName, profileImages},
  } = props;

  return (
    <View style={IndividualStoryStyle.storyContainer}>
      <View style={IndividualStoryStyle.imageContainer}>
        <UserProfileImage profileImages={profileImages} />
      </View>
      <Text style={IndividualStoryStyle.firstNameTxt}>{firstName}</Text>
    </View>
  );
};

IndividualStory.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    profileImages: PropTypes.number,
    firstName: PropTypes.string,
  }),
};

export default IndividualStory;

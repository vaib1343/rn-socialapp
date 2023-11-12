import {Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {titleStyles} from './Title.style';

const Title = props => {
  return <Text style={[titleStyles.title]}>{props.title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title;

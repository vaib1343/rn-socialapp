import {View, Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {getFontFamily} from '../../../assets/fonts/helper';
import {scaleFontSize} from '../../../utils/scaling';
import {TabTitleStyle} from './TabTitle.style';

const TabTitle = ({title, focused}) => {
  return (
    <Text
      style={[TabTitleStyle.title, !focused && TabTitleStyle.notFocusedtitle]}>
      {title}
    </Text>
  );
};

TabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};
export default TabTitle;

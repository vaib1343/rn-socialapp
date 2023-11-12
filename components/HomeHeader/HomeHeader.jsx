import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope, faMessage} from '@fortawesome/free-solid-svg-icons';
import {HeaderStyles} from './Homeheader.style';

const HomeHeader = () => {
  return (
    <View style={HeaderStyles.headerContainer}>
      <View>
        <Title title={"Let's Explore"} />
      </View>
      <TouchableOpacity style={HeaderStyles.iconContainer}>
        <FontAwesomeIcon icon={faEnvelope} color="#898DAE" />
        <View style={HeaderStyles.numberContainer}>
          <Text style={HeaderStyles.numberTxt}>2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

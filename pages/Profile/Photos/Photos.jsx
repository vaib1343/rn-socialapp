import {View, Text} from 'react-native';
import React from 'react';
import {ProfileStyles} from '../Profile.style';
import {Image} from 'react-native';
import {PhotoStyles} from './Photos.style';
import {globalStyles} from '../../../assets/styles/globalStyles';
import {ScrollView} from 'react-native-gesture-handler';

const Photos = () => {
  return (
    <ScrollView
      style={[globalStyles.backgroundWhite]}
      showsVerticalScrollIndicator={false}>
      <View style={PhotoStyles.photosContainer}>
        <Image
          resizeMode="contain"
          style={PhotoStyles.image}
          source={require('../../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={PhotoStyles.image}
          source={require('../../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={PhotoStyles.image}
          source={require('../../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={PhotoStyles.image}
          source={require('../../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={PhotoStyles.image}
          source={require('../../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={PhotoStyles.image}
          source={require('../../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={PhotoStyles.image}
          source={require('../../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={PhotoStyles.image}
          source={require('../../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={PhotoStyles.image}
          source={require('../../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={PhotoStyles.image}
          source={require('../../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={PhotoStyles.image}
          source={require('../../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={PhotoStyles.image}
          source={require('../../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default Photos;

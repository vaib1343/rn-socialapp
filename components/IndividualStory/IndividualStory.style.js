import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

export const IndividualStoryStyle = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  imageContainer: {
    height: 65,
    width: 65,
  },
  firstNameTxt: {
    color: '#022150',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '500'),
    marginTop: 8,
  },
});

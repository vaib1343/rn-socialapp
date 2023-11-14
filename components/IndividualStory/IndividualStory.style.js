import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';

export const IndividualStoryStyle = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),
  },
  imageContainer: {
    height: 65,
    width: 65,
  },
  firstNameTxt: {
    color: '#022150',
    fontSize: scaleFontSize(14),
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '500'),
    marginTop: verticalScale(8),
  },
});

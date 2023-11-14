import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../utils/scaling';

export const PhotoStyles = StyleSheet.create({
  photosContainer: {
    paddingHorizontal: horizontalScale(21),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 5,
  },
  image: {
    width: horizontalScale(140),
    height: verticalScale(90),
  },
});

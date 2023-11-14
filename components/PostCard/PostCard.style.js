import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';

export const PostCardStyles = StyleSheet.create({
  postContainer: {
    paddingVertical: verticalScale(23),
    borderBottomWidth: 0.5,
    borderBottomColor: '#EFF2F6',
    rowGap: verticalScale(20),
    flex: 1,
  },
  //Header Styles
  postHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(10),
  },
  imageContainer: {
    height: 48,
    width: 48,
  },
  userName: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    letterSpacing: 0.16,
  },
  location: {
    marginTop: verticalScale(5),
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    letterSpacing: 0.12,
  },

  //Footer styles
  postFooter: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: horizontalScale(27),
  },
  iconContainer: {
    display: 'flex',
    gap: verticalScale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  countText: {
    color: '#79869F',
    fontSize: scaleFontSize(14),
    fontFamily: getFontFamily('Inter', '500'),
  },
});

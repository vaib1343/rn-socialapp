import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

export const ProfileStyles = StyleSheet.create({
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: '#E9EFF1',
    paddingRight: horizontalScale(26),
    marginRight: horizontalScale(26),
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  imageContainer: {
    height: horizontalScale(110),
    width: horizontalScale(110),
  },
  userName: {
    marginTop: verticalScale(20),
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
    letterSpacing: 0.4,
    fontSize: scaleFontSize(20),
    textAlign: 'center',
  },
  countText: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
    letterSpacing: 0.4,
    fontSize: scaleFontSize(20),
    textAlign: 'center',
  },
  typeText: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    letterSpacing: 0.32,
    marginTop: verticalScale(6),
    textAlign: 'center',
  },
  statsContainer: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: verticalScale(20),
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  tabContainer: {
    width: '100%',
    marginTop: verticalScale(10),
    // flex: 1,
  },
  tab: {},
});

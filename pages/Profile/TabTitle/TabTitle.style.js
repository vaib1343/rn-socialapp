import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../assets/fonts/helper';
import {horizontalScale, scaleFontSize} from '../../../utils/scaling';

export const TabTitleStyle = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '500'),
    letterSpacing: 0.32,
    fontSize: scaleFontSize(16),
    padding: horizontalScale(15),
  },
  notFocusedtitle: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
  },
});

import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

export const titleStyles = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 24,
  },
});

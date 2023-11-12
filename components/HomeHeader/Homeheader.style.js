import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

export const HeaderStyles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    backgroundColor: '#F9FAFB',
    padding: 14,
    borderRadius: 100,
    position: 'relative',
  },
  numberContainer: {
    position: 'absolute',
    right: 10,
    top: 12,
    backgroundColor: '#F35BAC',
    borderRadius: 100,
    height: 10,
    width: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  numberTxt: {
    color: '#fff',
    fontSize: 6,
    fontFamily: getFontFamily('Inter', '600'),
  },
});

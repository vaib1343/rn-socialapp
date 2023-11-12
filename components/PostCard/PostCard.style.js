import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

export const PostCardStyles = StyleSheet.create({
  postContainer: {
    paddingVertical: 23,
    borderBottomWidth: 0.5,
    borderBottomColor: '#EFF2F6',
    rowGap: 20,
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
    gap: 10,
  },
  imageContainer: {
    height: 48,
    width: 48,
  },
  userName: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 16,
    letterSpacing: 0.16,
  },
  location: {
    marginTop: 5,
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    letterSpacing: 0.12,
  },

  //Footer styles
  postFooter: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 27,
  },
  iconContainer: {
    display: 'flex',
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  countText: {
    color: '#79869F',
    fontSize: 14,
    fontFamily: getFontFamily('Inter', '500'),
  },
});

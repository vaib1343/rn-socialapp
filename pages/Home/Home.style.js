import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../utils/scaling';

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  storyContainer: {
    marginTop: 21,
    paddingHorizontal: horizontalScale(20),
  },
  postContainer: {
    paddingHorizontal: horizontalScale(20),
    marginTop: 30,
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: horizontalScale(20),
  },
});

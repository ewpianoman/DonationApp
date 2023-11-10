import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from './scaling';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#FFF',
  },
  flex: {
    flex: 1,
  },
  marginHorizontal24: {
    marginHorizontal: horizontalScale(24),
  },
  marginBottom24: {
    marginBottom: verticalScale(24),
  },
});

export default globalStyle;

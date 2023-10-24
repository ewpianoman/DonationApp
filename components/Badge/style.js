import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    borderRadius: horizontalScale(50),
    paddingVertical: verticalScale(5),
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(10),
    lineHeight: scaleFontSize(13),
    textAlign: 'center',
  },
});

export default style;

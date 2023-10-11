import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    borderRadius: horizontalScale(50),
    height: verticalScale(55),
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    textAlign: 'center',
  },
});

export default style;

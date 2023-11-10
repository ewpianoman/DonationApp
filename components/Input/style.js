import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  inputContainer: {
    borderBottomColor: 'rgba(167, 167, 167, 0.50)',
    borderBottomWidth: scaleFontSize(1),
  },
  label: {
    color: '#36455A',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
  },
  input: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    paddingVertical: verticalScale(12),
  },
});

export default style;

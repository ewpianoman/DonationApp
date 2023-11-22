import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  backButton: {
    marginTop: verticalScale(10),
    marginLeft: horizontalScale(14),
  },
  title: {
    marginTop: verticalScale(102),
  },
  registrationButton: {
    marginTop: verticalScale(37),
  },
  error: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    color: '#EE0000',
    marginTop: verticalScale(24),
    textAlign: 'center',
  },
  success: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    color: '#28A745',
    marginTop: verticalScale(24),
    textAlign: 'center',
  },
});

export default style;

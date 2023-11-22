import {StyleSheet} from 'react-native';
import {verticalScale, scaleFontSize} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  title: {
    marginTop: verticalScale(163),
  },
  loginButton: {
    marginTop: verticalScale(37),
  },
  registrationButton: {
    alignItems: 'center',
  },
  error: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    color: '#EE0000',
    marginTop: verticalScale(24),
    textAlign: 'center',
  },
});

export default style;

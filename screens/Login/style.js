import {StyleSheet} from 'react-native';
import {verticalScale} from '../../assets/styles/scaling';

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
});

export default style;

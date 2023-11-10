import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

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
});

export default style;

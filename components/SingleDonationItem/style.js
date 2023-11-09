import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  donationItem: {},
  image: {
    width: horizontalScale(142),
    height: verticalScale(170),
    borderRadius: scaleFontSize(20),
  },
  badge: {
    position: 'absolute',
    top: verticalScale(13),
    left: horizontalScale(10),
    zIndex: 1,
  },
  donationInfo: {
    marginTop: verticalScale(16),
  },
  title: {},
  price: {
    marginTop: verticalScale(5),
  },
});

export default style;

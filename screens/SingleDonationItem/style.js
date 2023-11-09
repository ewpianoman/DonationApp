import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  pageContainer: {
    marginHorizontal: horizontalScale(21),
    marginTop: verticalScale(7),
  },
  donationItemImage: {
    width: '100%',
    height: verticalScale(240),
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    borderRadius: horizontalScale(5),
  },
  badge: {
    marginBottom: verticalScale(16),
  },
  description: {
    marginTop: verticalScale(7),
    marginBottom: verticalScale(10),
    lineHeight: scaleFontSize(22),
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(14),
    color: '#000',
  },
  button: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(20),
  },
});

export default style;

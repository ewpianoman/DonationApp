import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    borderRadius: horizontalScale(50),
    height: verticalScale(50),
    justifyContent: 'center',
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  title: {
    color: '#FFF',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    textAlign: 'center',
  },
  inactiveTitle: {
    color: '#79869F',
  },
});

export default style;

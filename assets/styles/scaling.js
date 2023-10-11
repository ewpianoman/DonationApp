import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();

// Width Scaling
const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};
const horizontalScale = size => (width / guidelineBaseWidth()) * size;

// Height Scaling
const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};
const verticalScale = size => (height / guidelineBaseHeight()) * size;

// Font Scaling
const guidelineBaseFontSize = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};
const scaleFontSize = size =>
  Math.round((width / guidelineBaseFontSize()) * size);

export {horizontalScale, verticalScale, scaleFontSize};

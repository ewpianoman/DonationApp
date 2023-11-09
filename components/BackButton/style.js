import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#F3F5F9',
    width: horizontalScale(44),
    height: horizontalScale(44),
    borderRadius: horizontalScale(44),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;

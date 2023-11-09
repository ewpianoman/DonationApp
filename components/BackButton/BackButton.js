import React from 'react';
import {Pressable} from 'react-native';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';

import style from './style';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

const BackButton = props => {
  return (
    <Pressable onPress={() => props.onPress()} style={style.button}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        size={horizontalScale(24)}
        color={'#022150'}
      />
    </Pressable>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;

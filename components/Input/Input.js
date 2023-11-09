import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const Input = props => {
  const [value, setValue] = useState('');

  return (
    <View style={style.inputContainer}>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        style={style.input}
        value={value}
        onChangeText={val => setValue(val)}
        keyboardType={props.keyboardType ? props.keyboardType : null}
        autoCapitalize={props.autoCapitalize ? props.autoCapitalize : null}
      />
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
};

export default Input;

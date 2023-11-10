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
        onChangeText={val => {
          setValue(val);
          props.onChangeText(val);
        }}
        keyboardType={props.keyboardType}
        autoCapitalize={props.autoCapitalize ? props.autoCapitalize : null}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder ? props.placeholder : null}
      />
    </View>
  );
};

Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
};

export default Input;

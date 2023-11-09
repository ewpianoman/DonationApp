import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import Input from '../../components/Input/Input';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Login = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={style.formContainer}>
        <Input
          label={'Email'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

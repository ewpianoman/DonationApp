import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import Input from '../../components/Input/Input';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

const Registration = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyle.marginHorizontal24}>
        <View style={[style.title, globalStyle.marginBottom24]}>
          <Header title={'Hello and Welcome!'} type={1} color={'#022150'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'First & Last Name'}
            onChangeText={val => setFullName(val)}
            placeholder={'Enter your name...'}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'Email'}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            onChangeText={val => setEmail(val)}
            placeholder={'Enter your email...'}
          />
        </View>
        <View>
          <Input
            label={'Password'}
            autoCapitalize={'none'}
            secureTextEntry={true}
            onChangeText={val => setPassword(val)}
            placeholder={'••••••'}
          />
        </View>
        <View style={[style.registrationButton, globalStyle.marginBottom24]}>
          <Button title={'Register'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;

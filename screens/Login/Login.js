import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {loginUser} from '../../api/user';
import {logIn} from '../../redux/reducers/User';
import {Routes} from '../../navigation/Routes';
import Input from '../../components/Input/Input';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyle.marginHorizontal24}>
        <View style={[style.title, globalStyle.marginBottom24]}>
          <Header title={'Welcome Back'} type={1} color={'#022150'} />
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
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        <View style={[style.loginButton, globalStyle.marginBottom24]}>
          <Button
            onPress={async () => {
              let user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                dispatch(logIn(user.data));
                navigation.navigate(Routes.Home);
              }
            }}
            isDisabled={email.length < 5 || password.length < 8}
            title={'Login'}
          />
        </View>
        <Pressable
          style={style.registrationButton}
          onPress={() => navigation.navigate(Routes.Registration)}>
          <Header title={"Don't have an account?"} type={3} color={'#156CF7'} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

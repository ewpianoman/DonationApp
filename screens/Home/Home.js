import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import {resetToInitialState, updateFirstName} from '../../redux/reducers/User';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello,</Text>
            <View style={style.userName}>
              <Header
                color={'#022150'}
                title={`${user.firstName} ${user.lastName[0]}. 👋`}
              />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={style.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

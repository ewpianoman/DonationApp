import React from 'react';
import {SafeAreaView, View} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.donationGrid}>
        <SingleDonationItem
          uri={require('../../assets/images/cactus.webp')}
          badgeTitle={'Environment'}
          donationTitle={'Tree Cactus Imitation'}
          price={44}
        />
        <SingleDonationItem
          uri={require('../../assets/images/cactus.webp')}
          badgeTitle={'Environment'}
          donationTitle={'Tree Cactus Imitation'}
          price={44}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

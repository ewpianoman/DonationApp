import React from 'react';
import {Image, View, Pressable} from 'react-native';
import PropTypes from 'prop-types';

import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import style from './style';

const SingleDonationItem = props => {
  return (
    <Pressable
      style={style.donationItem}
      onPress={() => props.onPress(props.donationItemId)}>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          source={{uri: props.uri}}
          style={style.image}
          resizeMode={'cover'}
        />
      </View>
      <View style={style.donationInfo}>
        <View style={style.title}>
          <Header
            title={props.donationTitle}
            type={3}
            color={'#0A043C'}
            style={style.title}
            numberOfLines={1}
          />
        </View>
        <View style={style.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={'#156CF7'}
          />
        </View>
      </View>
    </Pressable>
  );
};

SingleDonationItem.defaultProps = {
  onPress: () => {},
};

SingleDonationItem.propTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.any.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default SingleDonationItem;

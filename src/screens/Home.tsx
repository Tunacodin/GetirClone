import React from 'react';
import {Text, View, Dimensions, Image, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import House from '../../assets/img/home.png';

import {Header} from '../components/Header';
import {BannerCarousel} from '../components/BannerCarousel';
import MainCategories  from '../components/MainCategories';
import { color } from '../../assets/colors';

const {width, height} = Dimensions.get('window');

export const Home = () => {
  return (
    <ScrollView style={{backgroundColor:color.bgWhite}}>
      <Header />
      <BannerCarousel />
      <MainCategories/>
    </ScrollView>
  );
};

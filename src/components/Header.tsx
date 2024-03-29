import React from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import House from '../../assets/img/home.png';
import { color } from '../../assets/colors';

const {width, height} = Dimensions.get('window');


export const Header = () => {
  return (
    <View
      style={{
        height: height * 0.064,
        backgroundColor: '#FFD300',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          height: height * 0.064,
          backgroundColor: 'white',
          width: '80%',
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomRightRadius: 25,
          borderTopRightRadius: 25,
        }}>
        <Image
          style={{ width: 25, height: 18,margin:10, marginRight:13}}
          source={House}
        />
        <Text
          style={{color: color.primary, fontWeight: '700', marginRight:5 }}>
          Ev
        </Text>
        <Text style={{color: color.secondary, fontSize: 14}}>
          
          Bağbaşı Mh., 1122.Sokak, Bina ...
        </Text>
        <Entypo name="chevron-right" size={24} color={color.main} />
      </View>

      <View
        style={{
          alignItems: 'center',
          alignContent: 'center',
          paddingRight: 20,
        }}>
        <Text style={{color: color.main, fontSize: 14}}>TVS</Text>
        <Text style={{color: color.main, fontSize: 14}}>20-30 dk</Text>
      </View>
    </View>
  );
};

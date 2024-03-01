import React, {useState} from 'react';
import {View} from 'react-native';
import CategoryItem from './CategoryItem';
import {Category} from '../models'; //class modelı
import categoriesGetir from '../../assets/categoriesGetir'; //json dosyası

export default function MainCategories() {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {categories.map(item => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </View>
  );
}

import React, { useState } from 'react'
import { Text, View, ScrollView, VirtualizedList, Modal } from 'react-native'
import { gStyle } from '../styles/style'
import NewsItem from './NewsItem'
import Feather from '@expo/vector-icons/Feather';

export default function Main({navigation}) {

  const News = require('../news.json')
  const [news, setNews] = useState(News)

  const getItemNews = (_data, index) => ({
    id: _data[index].key,
    name: _data[index].name,
    previewText: _data[index].previewText,
    previewImage: _data[index].previewImage,
    detailText: _data[index].detailText,
    tags: _data[index].tags,
  });
  
  const getItemCountNews = _data => _data.length;

  return (
    <View style={gStyle.mainScreen}>
      <View style={gStyle.headerOfScreen}>
        <Text style={gStyle.title}>Новости Новосибирска </Text>
        <Feather name="plus" size={24} color="green" />
      </View>
      <ScrollView style={gStyle.mainBox} onError={console.warn}>
        <VirtualizedList
          data={news} 
          keyExtractor={item => item.key}
          getItemCount={getItemCountNews}
          getItem={getItemNews}
          renderItem={({item}) => (
            <NewsItem item={item} navigation={navigation} />
          )}
        />
      </ScrollView>
    </View>
    
  );
}

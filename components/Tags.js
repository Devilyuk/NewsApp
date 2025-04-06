import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { gStyle } from '../styles/style';

export default function FullInfo({items}) {

  return (
    <View style={gStyle.tagsBox}>
      <FlatList data={items} renderItem={({item}) => (
        <Text style={gStyle.tagsBoxText}>{item.name}</Text>
      )} />
    </View>
  );
}

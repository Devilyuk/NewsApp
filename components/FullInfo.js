import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { gStyle } from '../styles/style';

export default function FullInfo({route}) {
  return (
    <ScrollView style={gStyle.scrollBox}>
      <View style={[gStyle.mainBox, gStyle.detailInfoPage]}>
        <Text style={gStyle.title}>{route.params.name}</Text>
        <Image 
          style={gStyle.detailImage}
          source={
            {uri: route.params.previewImage}
          } 
        />
        <Text style={gStyle.detailText}>{route.params.detailText}</Text>
      </View>
    </ScrollView>
  );
}

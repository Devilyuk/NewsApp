import React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../styles/style';


export default function Contacts() {
  return (
    <View style={gStyle.mainBox}>
      <Text style={gStyle.title}>Контакты</Text>
    </View>
  );
}

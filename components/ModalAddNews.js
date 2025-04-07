import React, { useState } from 'react'
import { Text, View, Modal } from 'react-native'
import { gStyle } from '../styles/style'
import Ionicons from '@expo/vector-icons/Ionicons';
import FormAddNews from './FormAddNews';

export default function ModalAddNews({modalWindow, setModalWindow, AddNews}) {
  return (
    <View><Modal visible={modalWindow}>
      <View>
        <View style={[gStyle.headerOfScreen, gStyle.headerOfModal]}>
          <Text style={[gStyle.title, {flex:1}]}>Добавление новости</Text>
          <Ionicons style={gStyle.modalCloseBtn} name="close" size={24} color="red" onPress={() => setModalWindow(false)} />
        </View>
        <FormAddNews setModalWindow={setModalWindow} AddNews={AddNews} />
      </View>
    </Modal></View>
    
  );
}

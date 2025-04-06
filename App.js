import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import MainStack from './navigate';
import { Platform, View, Text } from 'react-native';


const fonts = () => Font.loadAsync({
  'mp-bold': require('./assets/fonts/MPLUSRounded1c-Bold.ttf'),
  'mp-light': require('./assets/fonts/MPLUSRounded1c-Light.ttf'),
})

export default function App() {
  const [font, setFont] = useState(false)

  if (font) {
    // if (Platform.OS == 'web')
    //   return (<View style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flex:1}}><Text style={{fontFamily: 'mp-bold', fontSize: 20, textAlign: 'center'}}>Приложение временно недоступно в браузере.</Text></View>)

    return (
      <MainStack />
    );
  } else {
    return (
      <AppLoading 
        startAsync={fonts} 
        onFinish={() => setFont(true)} 
        onError={console.warn}
      />
    );
  }
}

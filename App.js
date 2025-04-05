import React, { useState } from 'react';
// import { } from 'react-native';
import AppLoading from 'expo-app-loading';
import { gStyle } from './styles/style';
import * as Font from 'expo-font'
import Main from './components/Main';

const fonts = () => Font.loadAsync({
  'mp-bold': require('./assets/fonts/MPLUSRounded1c-Bold.ttf'),
  'mp-light': require('./assets/fonts/MPLUSRounded1c-Light.ttf'),
})

export default function App() {
  const [font, setFont] = useState(false)

  if (font) {
    return (
      <Main />
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

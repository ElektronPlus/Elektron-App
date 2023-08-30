import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/components/Drawer';
import { View } from 'react-native';
import mobileAds from 'react-native-google-mobile-ads';
import { BannerAd } from 'react-native-google-mobile-ads';

export default function App() {
  
  mobileAds().initialize()

  const DefaultTheme = {
    dark: true,
    colors: {
      primary: '#3960CF',
      text: '#ffffff',
      background: '#121212',
    }
  };

  return (
      <NavigationContainer theme={DefaultTheme}>
      <MyDrawer />
      <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' }}>
        <BannerAd unitId='ca-app-pub-8487255892576881/1387808600' size='ANCHORED_ADAPTIVE_BANNER' />
      </View>
      </NavigationContainer>
  );
}
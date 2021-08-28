import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/components/Drawer';
import ThemeManager from './src/themes/ThemeManager';
import { View } from 'react-native';
import { AdMobBanner } from 'react-native-admob'

export default function App() {
  return (
    <ThemeManager>
      <NavigationContainer>
      <Drawer />
      <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212'}}>
      <AdMobBanner
        adSize="smartBanner"
        adUnitID="ca-app-pub-8487255892576881/1387808600"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}/>
      </View>
      </NavigationContainer>
    </ThemeManager>
  );
}
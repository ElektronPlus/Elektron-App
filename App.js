import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/components/Drawer';
import ThemeManager from './src/themes/ThemeManager';

export default function App() {
  return (
    <ThemeManager>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </ThemeManager>
  );
}
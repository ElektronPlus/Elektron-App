import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/components/Drawer';

export default function App() {
  return (
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
  );
}
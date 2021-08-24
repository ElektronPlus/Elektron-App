import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import Switch from 'expo-dark-mode-switch';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import logo from '../../../assets/backpack.png';
import styled from 'styled-components';
import {useTheme} from '../../themes/ThemeManager.js';

const StyledDrawer = styled.SafeAreaView`
  background: ${props => props.theme.backgroundAlt.toString()},
  flex: 1
`;
const StyledText = styled.Text`
  color: ${props => props.theme.text};
`;

const CustomDrawer = props => {
  const theme = useTheme();
  return (
    <StyledDrawer style={{flex: 1}}>
      <Image source={logo} style={styles.sideMenuProfileIcon} />
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey',
        }}>
        Elektron++ BETA
      </Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style={styles.separator} />
        <DrawerItem
          label={() => <StyledText>Discord</StyledText>}
          onPress={() => Linking.openURL('https://discord.gg/jrDxSTE')}
        />
        <DrawerItem
          label={() => <StyledText>Strona szkoły</StyledText>}
          onPress={() => Linking.openURL('https://zseis.zgora.pl/')}
        />
        <DrawerItem
          label={() => <StyledText>FB CKZiU</StyledText>}
          onPress={() => Linking.openURL('https://www.facebook.com/zgelektronik/')}
        />
      </DrawerContentScrollView>
      <View style={{alignItems: 'center', padding: 10}}>
        <Switch
          value={theme.mode === 'dark'}
          onChange={value => theme.setMode(value ? 'dark' : 'light')}
        />
      </View>
    </StyledDrawer>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 8,
    marginTop: 50,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

export default CustomDrawer;

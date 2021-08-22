import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Switch
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDiscord } from '@fortawesome/free-solid-svg-icons'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import logo from '../../../assets/backpack.png'
import styled from "styled-components"
import {useTheme} from "../../themes/ThemeManager.js"

const StyledDrawer = styled.SafeAreaView`
  background: ${props => props.theme.backgroundAlt.toString()},
  flex: 1
`
const StyledText = styled.Text`
  color: ${props => props.theme.text}
`

const CustomDrawer = (props) => {
  const theme = useTheme();
  return (
    <StyledDrawer style={{flex: 1}}>
      <Image
        source={logo}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={() => (
            <StyledText>Discord</StyledText>
          )}
          onPress={() => Linking.openURL('https://discord.gg/jrDxSTE')}
        />
        <Switch value={theme.mode === 'dark'} onValueChange={value => theme.setMode(value ? 'dark' : 'light')} />
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
        Elektron++ BETA
      </Text>
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
});

export default CustomDrawer;
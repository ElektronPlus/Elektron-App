import React from 'react';
import {View, StyleSheet, Linking, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBus} from '@fortawesome/free-solid-svg-icons';

const CustomDrawer = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#121212"}}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          fontWeight: 'bold',
          padding: 25,
          color: '#ffffff',
        }}>
        Elektron++
      </Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={() => <Text style={styles.white}>MZK Zielona Góra</Text>}
          icon={({focused}) => (
            <FontAwesomeIcon
              icon={faBus}
              size={focused ? 25 : 20}
              color={focused ? '#0080ff' : '#999999'}
            />
          )}
          onPress={() => Linking.openURL('https://mzkzg.wybran.dev/app')}
        />

        <View style={styles.separator} />
        
        <DrawerItem
          label={() => <Text style={styles.white}>Discord</Text>}
          onPress={() => Linking.openURL('https://discord.gg/jrDxSTE')}
        />
        <DrawerItem
          label={() => <Text style={styles.white}>Strona szkoły</Text>}
          onPress={() => Linking.openURL('https://zseis.zgora.pl/')}
        />
        <DrawerItem
          label={() => <Text style={styles.white}>FB CKZiU</Text>}
          onPress={() =>
            Linking.openURL('https://www.facebook.com/zgelektronik/')
          }
        />
      </DrawerContentScrollView>
    </SafeAreaView>
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
    marginTop: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  white: {
    color: '#ffffff',
  }
});

export default CustomDrawer;

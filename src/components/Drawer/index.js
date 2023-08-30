import React from 'react';
import Home from '../../screens/Home';
import Timetable from '../../screens/Timetable';
import SchoolNews from '../../screens/SchoolNews';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faCalendar, faNewspaper, faBus, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import CustomDrawer from '../CustomDrawer';
import SubLessons from '../../screens/SubLessons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text } from 'react-native';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawer {...props} />}
          initialRouteName="Home"
          drawerPosition='left'
          drawerType="front"
          edgeWidth={100}
          hideStatusBar={false}
          screenOptions={{
            headerShown: true,
            swipeEnabled: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#3960CF'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerLabel: function(){
              return <Text style={styles.white}>Strona główna</Text>
            },
            title: 'Strona główna',
            drawerIcon: ({ focused }) => (
                <FontAwesomeIcon 
                icon={ faHome } 
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}/>
            )
          }}/>
        <Drawer.Screen
          name="Zastępstwa"
          component={SubLessons}
          options={{
            drawerLabel: function(){
              return <Text style={styles.white}>Zastępstwa</Text>
            },
            title: 'Zastępstwa',
            drawerIcon: ({ focused }) => (
                <FontAwesomeIcon 
                icon={ faCalendar } 
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}/>
            )
          }}/>
        <Drawer.Screen
          name="Plan lekcji"
          component={Timetable}
          options={{
            drawerLabel: function(){
              return <Text style={styles.white}>Plan lekcji</Text>
            },
            title: 'Plan lekcji',
            drawerIcon: ({ focused }) => (
              <FontAwesomeIcon 
              icon={ faClipboardList } 
              size={focused ? 25 : 20}
              color={focused ? '#0080ff' : '#999999'}/>
            )
          }}/>
        <Drawer.Screen
          name="Ogłoszenia szkolne"
          component={SchoolNews}
          options={{
            drawerLabel: function(){
              return <Text style={styles.white}>Ogłoszenia</Text>
            },
            title: 'Ogłoszenia',
            drawerIcon: ({ focused }) => (
              <FontAwesomeIcon 
              icon={ faNewspaper } 
              size={focused ? 25 : 20}
              color={focused ? '#0080ff' : '#999999'}/>
            )
          }}/>
      </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
  white: {
    color: '#ffffff',
  }
});
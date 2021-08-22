import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/Home';
import Timetable from '../../screens/Timetable';
import SchoolNews from '../../screens/SchoolNews';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faCalendar, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import CustomDrawer from '../CustomDrawer';
import styled from "styled-components"

const StyledText = styled.Text`
  color: ${props => props.theme.text}
`

export default function Drawer() {
    const Drawer = createDrawerNavigator();
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
              return <StyledText>Strona główna</StyledText>
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
          name="Plan lekcji"
          component={Timetable}
          options={{
            drawerLabel: function(){
              return <StyledText>Plan lekcji</StyledText>
            },
            title: 'Plan lekcji',
            drawerIcon: ({ focused }) => (
              <FontAwesomeIcon 
              icon={ faCalendar } 
              size={focused ? 25 : 20}
              color={focused ? '#0080ff' : '#999999'}/>
            )
          }}/>
        <Drawer.Screen
          name="Ogłoszenia szkolne"
          component={SchoolNews}
          options={{
            drawerLabel: function(){
              return <StyledText>Ogłoszenia</StyledText>
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
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const {Navigator, Screen} = createDrawerNavigator()

const Drawer = () => (
    <Navigator
        screenOptions={{
            headerShown:'screen'
        }}
    >
        <Screen name='Home' component={HomeStack}/>
        <Screen name='About' component={AboutStack}/>
    </Navigator>
)

const AppNavigator = () => (
    <NavigationContainer>
        <Drawer />
    </NavigationContainer>
)

export default AppNavigator
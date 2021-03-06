import React from 'react'
import  {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails';

const {Navigator, Screen} = createStackNavigator()

const HomeStack = () => (
        <Navigator 
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor:'#eee',
                    height: 80
                },
                headerTintColor: '#444',
                headerShown:'float'
            }}
        >
            <Screen 
            name='Home' 
            component={Home} 
            options={{
                title:'GameZone'
            }}
            />
            <Screen name='Review Details' component={ReviewDetails} options={{title:'Review Details'}}/>
        </Navigator>
)


export default HomeStack
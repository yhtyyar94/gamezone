import React from 'react'
import  {createStackNavigator} from '@react-navigation/stack'
import About from './../screens/About';

const {Navigator, Screen} = createStackNavigator()

const AboutStack = () => (
        <Navigator 
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor:'#eee',
                    height: 80
                },
                headerTintColor: '#444',
                headerShown:false
            }}
        >
            <Screen 
            name='About' 
            component={About} 
            options={{
                title:'About GameZone'
            }}
            />
        </Navigator>
)


export default AboutStack
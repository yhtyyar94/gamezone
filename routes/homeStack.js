import  {createStackNavigator} from 'react-navigation-stack'
import  {NavigationContainer} from '@react-navigation/native'
import Home from '../screens/Home'
import ReviewDetails from './../screens/ReviewDetails';
import About from './../screens/About';

const screens = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    },
    About: {
        screen: About
    }
}

const HomeStack = createStackNavigator(screens)

export default NavigationContainer(HomeStack)
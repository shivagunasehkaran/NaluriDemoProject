import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home/home';
import PiDetails from '../screens/Details/pi_Details';
import SunDetails from '../screens/Details/sun_Details';

export const rootStack = createStackNavigator({
    Home: {
        screen: Home,
    },
    PiDetails: {
        screen: PiDetails,
    },
    SunDetails: {
        screen: SunDetails,
    },
    initialRouteName: 'Home'
});
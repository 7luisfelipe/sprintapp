import { createDrawerNavigator } from 'react-navigation';

import Home from './pages/app';
import Logout from './pages/logout';
import RegisterUser from '../src/pages/resgisterUser'
import Map from './pages/map';

export default createDrawerNavigator({
    Home,
    Map,
    RegisterUser,
    Logout
}, {
    navigationOptions: {
        
    }
});
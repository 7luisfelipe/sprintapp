import { createDrawerNavigator } from 'react-navigation';

import Home from './pages/app';
import Logout from './pages/logout';
import Map from './pages/map';
// import Profile from './pages/profile';

export default createDrawerNavigator({
    Home,
    Map,
    Logout
}, {
    navigationOptions: {
        
    }
});
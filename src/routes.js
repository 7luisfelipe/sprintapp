import { createDrawerNavigator } from 'react-navigation';

import Home from './pages/app';
import Logout from './pages/logout';
import Cadastro from '../src/pages/resgisterUser'
import Map from './pages/map';

export default createDrawerNavigator({
    Home,
    Map,
    Cadastro,
    Logout
}, {
    navigationOptions: {
        
    }
});
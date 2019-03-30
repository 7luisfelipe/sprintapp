import { createStackNavigator } from 'react-navigation';
import Login from './login';
import RegisterUser from '../src/pages/resgisterUser'
import Main from './main';

export default createStackNavigator({
    RegisterUser,
    Login,
    Main
}, {
    navigationOptions: {
        header: null
    }
});

import { createStackNavigator } from 'react-navigation';
import Login from './login';
import Cadastro from '../src/pages/resgisterUser'
import Main from './main';

export default createStackNavigator({
    Cadastro,
    Login,
    Main
}, {
    navigationOptions: {
        header: null
    }
});

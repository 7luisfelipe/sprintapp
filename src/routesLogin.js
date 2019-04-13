import { createStackNavigator } from 'react-navigation';
import Login from './login';
import Cadastro from '../src/pages/resgisterUser'
import Main from './main';

export default createStackNavigator({
    Login,
    Cadastro,
    Main
}, {
    navigationOptions: {
        header: null
    }
});

import { createStackNavigator } from 'react-navigation';
import Login from './login';
import Main from './main';

export default createStackNavigator({
    Login,
    Main
}, {
    navigationOptions: {
        header: null
    }
});

import {AppRegistry} from 'react-native';
import App from './src/indexLogin';
// import App from './src/pages/map';
// import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

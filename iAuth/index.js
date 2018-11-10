/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import HelloWorld from './HelloWorld';
import Props from './Props';
import {name as appName} from './app.json';
//https://www.techiediaries.com/reactnative-android-barcode-scanner/
import QRScanner from './QRScanner';

AppRegistry.registerComponent(appName, () => QRScanner);
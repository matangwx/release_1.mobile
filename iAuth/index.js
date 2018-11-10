/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import HelloWorld from './HelloWorld';
import Props from './Props';
import {name as appName} from './app.json';

import QRScanner from './src/component/QRScanner';

AppRegistry.registerComponent(appName, () => QRScanner);






/**
 * 
 * QR_Camera Notes:-
 * 
 * - React-Navigation lib Needed. 
 * - Camera Permission.
 * Code Ref https://www.techiediaries.com/reactnative-android-barcode-scanner/
 */
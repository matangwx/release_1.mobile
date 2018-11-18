/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { StackNavigator } from 'react-navigation';
import QRScanner from './src/view/QRScanner';
import CheckIn from './src/view/CheckIn';

const App = StackNavigator({
  QRScanner: { screen: QRScanner},
  CheckIn: { screen: CheckIn},
})

export default App;
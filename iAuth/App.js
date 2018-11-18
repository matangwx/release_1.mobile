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
import Verifying from './src/view/Verifying';

const App = StackNavigator({
  QRScanner: { screen: QRScanner},
  Verifying: { screen: Verifying},
})

export default App;
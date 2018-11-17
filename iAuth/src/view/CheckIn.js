import React from 'react';
 import { Text, View } from 'react-native';
 import { createBottomTabNavigator } from 'react-navigation';

 class HomeScreen extends React.Component {

  state = {
    data: ''
 }
 componentDidMount = () => {
    fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=9VENWSTCNAZR&format=json&by=zone&zone=Asia/Singapore', {
       method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
       console.log(responseJson);
       this.setState({
          data: responseJson
       })
    })
    .catch((error) => {
       console.error(error);
    });
 }

   render() {
     return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>{this.state.data.formatted}</Text>
       </View>
     );
   }
 }

 class SettingsScreen extends React.Component {
   render() {
     return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Settings!</Text>
       </View>
     );
   }
 }

 export default createBottomTabNavigator({
   Home: HomeScreen,
   Settings: SettingsScreen,
 });

import React from 'react';
 import { Text, View } from 'react-native';
 import { createBottomTabNavigator } from 'react-navigation';
 import { getDateTimeFromApi } from './action/TimeDate';


 class HomeScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      data: ''
    }
  }

  componentDidMount(){
      getDateTimeFromApi().then(result => this.setState({
      data: result
    }))
  }


   render() {
   var dateNTime = this.state.data.split(" ");
   var date = dateNTime[0];
   var time = dateNTime[1];
    return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{date}</Text>
        <Text>{time}</Text>
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



    /*
     getDateTimeFromApi().then(function(result){
      console.log(result.split(" "));
      var timeNDate = result.split(" ");
       date = timeNDate[0];
       time = timeNDate[1];
      alert(time+"\n"+date)
    }, function(err){
      console.log(err);
    });

    */
import React, { Component } from "react";
import { StyleSheet, Text, View, Vibration, Dimensions } from "react-native";

import RNCamera from "react-native-camera";

export default class ReactBarcodeScannerProject extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      scanning: true,
      cameraType: RNCamera.constants.Type.back
    };
  }

  _handleBarCodeRead(e) {
    const { navigate } = this.props.navigation;
    Vibration.vibrate();
    this.setState({ scanning: false });
    if ("Inspire" == e.data) {
      navigate("CheckIn", { screen: "CheckIn" });
    }
    return;
  }
  getInitialState() {
    return {
      scanning: true,
      cameraType: Camera.constants.Type.back
    };
  }
  render() {
    if (this.state.scanning) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Scan QR Code</Text>
          <View style={styles.rectangleContainer}>
            <RNCamera
              style={styles.camera}
              type={this.state.cameraType}
              onBarCodeRead={this._handleBarCodeRead.bind(this)}>
              
              <View style={styles.rectangleContainer}>
                <View style={styles.rectangle} />
              </View>
            </RNCamera>
          </View>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{"\n"}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Invalid Code</Text>
          <Text style={styles.welcome}>Please Try Again</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  camera: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    //height: Dimensions.get('window').width,
    //width: Dimensions.get('window').width,
    height: 250,
    width: 250
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: "#00FF00",
    backgroundColor: "transparent"
  }
});

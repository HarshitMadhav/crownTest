import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

const window = Dimensions.get("window");

export default class Splash extends Component {
  componentDidMount() {
    this.timeoutCheck = setTimeout(() => {
      this.proceed();
    }, 4000);
  }

  proceed = () => {
    this.props.navigation.replace("SongsList");
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../assets/images/splash.png")}
          ></Image>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


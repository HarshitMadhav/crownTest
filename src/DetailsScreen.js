import React, { Component } from "react";
import {
  ImageBackground,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import colours from "../config/colours";
import Icon from "react-native-vector-icons/EvilIcons";

const DetailsScreen = (props) => {
  const {
    trackName,
    collectionName,
    artistName,
    artworkUrl60,
    artworkUrl100,
    trackId,
    trackTimeMillis,
  } = props.route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={{ uri: artworkUrl100 }}
            style={styles.backgroundImage}
          >
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Icon name="chevron-left" size={54} color="#333" />
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "column",
                alignSelf: "flex-end",
                paddingBottom: 40,
                paddingLeft: 19,
              }}
            >
              <Text style={styles.artistHeading}>{artistName}</Text>
              <Text style={styles.songHeading}>{trackName}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ flex: 1, paddingLeft: 19, paddingRight: 19 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginBottom: 30,
            }}
          >
            <Image style={styles.albumImage} source={{ uri: artworkUrl60 }} />
            <View
              style={{
                flexDirection: "column",
                flex: 1,
                alignSelf: "center",
                paddingRight: 10,
              }}
            >
              <Text style={styles.detailsHeading}>Album</Text>
              <Text style={styles.details}>{collectionName}</Text>
              <Text style={styles.detailsHeading}>Duration</Text>
              <Text style={styles.details}>{trackTimeMillis / 1000} secs</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.primaryBlack,
    flex: 1,
  },
  backgroundImage: { flex: 1, minHeight: 360, flexDirection: "row" },
  gradient: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  artistHeading: {
    color: colours.primaryWhite,
    fontSize: 35,
    lineHeight: 35,
    fontWeight: "300",
    paddingBottom: 7,
    shadowOpacity: 0.6,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  songHeading: {
    color: colours.primaryWhite,
    fontSize: 45,
    lineHeight: 45,
    fontWeight: "bold",
    paddingBottom: 0,
    shadowOpacity: 0.6,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  albumImage: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 3,
    borderColor: colours.primaryWhite,
    marginRight: 25,
  },
  detailsHeading: { color: colours.primaryGrey, marginBottom: 3 },
  details: {
    color: colours.primaryWhite,
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 16,
  },
});


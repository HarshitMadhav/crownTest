import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
const window = Dimensions.get("window");
import colours from "../config/colours";
import LoadingComponent from "./LoadingComponent";
import Icon from "react-native-vector-icons/EvilIcons";
Icon.loadFont();

const SongsList = (props) => {
  const [songsArray, setSongsArray] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://itunes.apple.com/search?term=Michael+Jackson`;
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setSongsArray(data.results);
      setLoading(false);
    };

    fetchData();
  }, []);

  const renderRowItems = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.suggestionItem}
        activeOpacity={0.9}
        onPress={() => props.navigation.navigate("DetailsScreen", { ...item })}
      >
        <Image style={styles.image} source={{ uri: item.artworkUrl60 }} />
        <View numberOfLines={1} style={styles.detailsContainer}>
          <Text numberOfLines={1} style={styles.songTitle}>
            {item.trackName}
          </Text>
          <Text numberOfLines={1} style={styles.artistDetails}>
            {item.artistName}
          </Text>
          <Text numberOfLines={1} style={styles.artistDetails}>
            {item.collectionName}
          </Text>
        </View>

        <Icon name="chevron-right" size={54} color="#333" />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {isLoading && <LoadingComponent />}
        <FlatList
          style={{
            flexGrow: 0,
            backgroundColor: colours.tertiaryBlack,
            alignSelf: "stretch",
          }}
          data={songsArray}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderRowItems}
        />
      </View>
    </SafeAreaView>
  );
};
export default SongsList;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colours.tertiaryBlack,
  },
  suggestionItem: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    backgroundColor: colours.tertiaryBlack,
    elevation: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 12,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    marginBottom: 10,
  },
  image: {
    width: 66,
    height: 66,
    borderRadius: 66 / 2,
    alignSelf: "center",
    borderColor: colours.primaryWhite,
    borderWidth: 2,
    marginRight: 17,
    flex: 0,
  },
  detailsContainer: {
    width: 145,
    marginRight: 20,
  },
  songTitle: {
    color: "white",
    paddingBottom: 2,
  },
  artistDetails: {
    color: colours.primaryGrey,
    paddingBottom: 2,
  },
});


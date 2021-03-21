import React from "react";
import { ActivityIndicator } from "react-native";
import colours from "../config/colours";

const LoadingComponent = () => {
  return (
    <ActivityIndicator
      size="large"
      color={colours.tertiaryBlack}
      style={{ marginTop: 20 }}
    />
  );
};
export default LoadingComponent;


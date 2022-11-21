import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View
      style={{
        height: 200,
        padding: 50,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
        }}
      >
        Hello World!
      </Text>
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={require("./image/hotdog.jpg")}
      />
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={{
          uri: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_887,c_fill,g_auto,h_499,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181114130138-korean-food-2620014201204004k-jeonju-bibimbap.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

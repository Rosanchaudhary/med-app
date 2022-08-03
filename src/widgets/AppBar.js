import React from "react";
import { StyleSheet, Text, View ,Image} from "react-native";


export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <Image
        style={{ width: 20, height: 20 }}
        source={require("E:/ReactNative/cortico/assets/logo.png")}
      />
      <View style={{ width: 10 }}></View>
      <Text style={styles.textStyle}>CORTICO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  appBar: {
    display: "flex",
    flexDirection: "row",
    height: 80,
    width: "100%",
    backgroundColor: "#4B54F6",
    alignItems: "center",
    justifyContent: "center",
  },
});

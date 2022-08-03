import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function TextInputWithPrefix() {
  const [value, onChangeText] = React.useState("");
  return (
    <View style={styles.textViewWithIcon}>
      <Text>
        <Icon name="search" size={14} color="#6B7280" />
      </Text>
      <TextInput
        style={styles.inputView}
        placeholder="Find a medical doctor or service..."
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textViewWithIcon: {
    height: 42,
    display: "flex",
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent:"center",
    padding: 10,
  },
  inputView: {
    fontSize:12,
    paddingLeft:4
  },
});

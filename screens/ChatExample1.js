import * as React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Color } from "../GlobalStyles";

const ChatExample1 = () => {
  return (
    <TextInput
      style={styles.chatExample1}
      placeholder="3:30"
      keyboardType="default"
      placeholderTextColor="#fff"
    />
  );
};

const styles = StyleSheet.create({
  chatExample1: {
    backgroundColor: Color.slategray,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ChatExample1;

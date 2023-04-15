import * as React from "react";
import { StatusBar, StyleSheet, View, TextInput, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionCard from "../components/SectionCard";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const EmptyConversation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.emptyConversation}>
      <View style={[styles.bowserIosFirefoxDarkParent, styles.bowserPosition]}>
        <StatusBar style={styles.bowserPosition} barStyle="default" />
        <View style={[styles.barsHomeIndicatorIphone, styles.homeLayout]}>
          <View style={[styles.homeIndicator, styles.homeLayout]} />
        </View>
      </View>
      <TextInput
        style={styles.emptyConversationChild}
        placeholder=" "
        keyboardType="default"
        multiline
        autoCapitalize="sentences"
      />
      <SectionCard
        onFramePressablePress={() => navigation.navigate("Dashboard1")}
      />
      <SectionCard
        onFramePressablePress={() => navigation.navigate("Dashboard1")}
      />
      <Text style={styles.askAnything}>Ask anything!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bowserPosition: {
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  homeLayout: {
    width: 134,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.globalWhite,
    height: 5,
  },
  barsHomeIndicatorIphone: {
    top: 778,
    left: 121,
    height: 34,
  },
  bowserIosFirefoxDarkParent: {
    height: 812,
  },
  emptyConversationChild: {
    top: 699,
    left: 20,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray_300,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.32)",
    borderWidth: 1,
    width: 336,
    height: 53,
    flexDirection: "row",
    padding: Padding.p_5xs,
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    overflow: "hidden",
  },
  askAnything: {
    top: 397,
    left: 136,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemibold,
    color: "rgba(255, 255, 255, 0.4)",
    textAlign: "center",
    position: "absolute",
  },
  emptyConversation: {
    backgroundColor: Color.slategray,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default EmptyConversation;

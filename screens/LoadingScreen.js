import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const LoadingScreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.loadingScreen}
      onPress={() => navigation.navigate("WelcomeScreen1")}
    >
      <Image
        style={styles.logo1Icon}
        resizeMode="cover"
        source={require("../assets/logo-12@3x.png")}
      />
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector6@3x.png")}
        />
        <Text style={[styles.chatgpt, styles.chatgptTypo]}>ChatGPT</Text>
        <Text style={styles.chatgptTypo}>Senior Buddy</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chatgptTypo: {
    marginTop: 40,
    textAlign: "left",
    color: Color.globalWhite,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    fontSize: FontSize.size_21xl,
  },
  logo1Icon: {
    borderRadius: Border.br_95xl,
    width: 232,
    height: 204,
  },
  vectorIcon: {
    width: 108,
    height: 108,
    display: "none",
  },
  chatgpt: {
    display: "none",
  },
  vectorParent: {
    marginTop: 43,
    alignItems: "center",
  },
  loadingScreen: {
    backgroundColor: Color.slategray,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    paddingLeft: 63,
    paddingTop: Padding.p_191xl,
    paddingRight: 55,
    paddingBottom: Padding.p_191xl,
    alignItems: "center",
  },
});

export default LoadingScreen;

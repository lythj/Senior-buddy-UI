import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import SeniorBuddyContainer from "../components/SeniorBuddyContainer";
import ContainerLimitations from "../components/ContainerLimitations";
import { useNavigation } from "@react-navigation/native";
import BowserContainer from "../components/BowserContainer";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const WelcomeScreen3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomeScreen3}>
      <View style={styles.frameParent}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector3@3x.png")}
          />
          <Text
            style={[styles.welcomeToChatgpt, styles.askAnythingGetSpaceBlock]}
          >{`Welcome to
ChatGPT`}</Text>
          <SeniorBuddyContainer />
          <Text
            style={[styles.askAnythingGet, styles.askAnythingGetSpaceBlock]}
          >
            Ask anything, get yout answer
          </Text>
        </View>
        <SeniorBuddyContainer
          vectorMarginTop={-69}
          capabilitiesWidth={120}
          capabilitiesHeight={106}
          propDisplay="none"
          propDisplay1="none"
          propDisplay2="none"
        />
        <ContainerLimitations
          apiKey={require("../assets/group-1@3x.png")}
          limitationsText="Limitations"
          incorrectInfoText="May occasionally generate incorrect information"
          biasedContentText="May occasionally produce harmful instructions or biased content"
          funFactText="Limited knowledge of world and events after 2021"
        />
        <View style={styles.frameChild} />
      </View>
      <View style={[styles.rectangleParent, styles.parentFlexBox]}>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleView, styles.frameLayout]} />
      </View>
      <Pressable
        style={[styles.letsChatParent, styles.parentFlexBox]}
        onPress={() => navigation.navigate("Dashboard1")}
      >
        <Text style={styles.letsChat}>Let’s Chat</Text>
        <Image
          style={styles.frameChild1}
          resizeMode="cover"
          source={require("../assets/vector-2@3x.png")}
        />
      </Pressable>
      <BowserContainer batteryBackgroundColor="unset" />
      <View style={[styles.barsHomeIndicatorIphone, styles.homeLayout]}>
        <View style={[styles.homeIndicator, styles.homeLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  askAnythingGetSpaceBlock: {
    marginTop: 24,
    textAlign: "center",
    color: Color.globalWhite,
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  frameLayout: {
    height: 2,
    width: 28,
    borderRadius: Border.br_xs,
  },
  homeLayout: {
    width: 134,
    position: "absolute",
  },
  vectorIcon: {
    width: 24,
    height: 24,
  },
  welcomeToChatgpt: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    marginTop: 24,
    alignSelf: "stretch",
  },
  askAnythingGet: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemibold,
  },
  vectorParent: {
    display: "none",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameChild: {
    marginTop: -69,
    alignItems: "center",
  },
  frameParent: {
    top: 82,
    left: 20,
    paddingBottom: 41,
    alignItems: "center",
    position: "absolute",
  },
  frameItem: {
    backgroundColor: Color.gray_400,
    height: 2,
    width: 28,
    borderRadius: Border.br_xs,
  },
  frameInner: {
    marginLeft: 12,
    backgroundColor: Color.gray_400,
    height: 2,
    width: 28,
    borderRadius: Border.br_xs,
  },
  rectangleView: {
    backgroundColor: Color.darkkhaki,
    marginLeft: 12,
    height: 2,
    width: 28,
    borderRadius: Border.br_xs,
  },
  rectangleParent: {
    top: 706,
    left: 135,
  },
  letsChat: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.globalWhite,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
  },
  frameChild1: {
    width: 13,
    height: 10,
    marginLeft: 12,
  },
  letsChatParent: {
    top: 730,
    left: 21,
    borderRadius: Border.br_5xs,
    width: 335,
    height: 48,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    backgroundColor: Color.darkkhaki,
    alignItems: "center",
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
  welcomeScreen3: {
    backgroundColor: Color.slategray,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default WelcomeScreen3;

import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContainerLimitations from "../components/ContainerLimitations";
import StepContainer from "../components/StepContainer";
import BowserContainer from "../components/BowserContainer";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const WelcomeScreen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomeScreen1}>
      <View style={styles.frameParent}>
        <View style={styles.logo1Parent}>
          <Image
            style={styles.logo1Icon}
            resizeMode="cover"
            source={require("../assets/logo-11@3x.png")}
          />
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector3@3x.png")}
          />
          <Text
            style={[styles.welcomeToSenior, styles.welcomeToSeniorFlexBox]}
          >{`Welcome to
Senior Buddy`}</Text>
          <Text
            style={[styles.yourFriendlyChat, styles.welcomeToSeniorFlexBox]}
          >{`
Your friendly chat companion`}</Text>
        </View>
        <ContainerLimitations
          apiKey={require("../assets/frame13@3x.png")}
          limitationsText="Examples"
          incorrectInfoText={`"Tell me a fun fact about history”`}
          biasedContentText={`"Can you recommend a good mystery novel?"`}
          funFactText="“How fat is this ass tho?”"
          propHeight="unset"
          propMarginTop={47}
          propWidth={20}
          propHeight1={20}
          propOverflow="hidden"
        />
        <StepContainer
          propMarginTop={47}
          propBackgroundColor="#c6c488"
          propBackgroundColor1="rgba(255, 255, 255, 0.2)"
          onFramePressablePress={() => navigation.navigate("WelcomeScreen2")}
        />
      </View>
      <BowserContainer batteryBackgroundColor="unset" />
      <View style={[styles.barsHomeIndicatorIphone, styles.homeLayout]}>
        <View style={[styles.homeIndicator, styles.homeLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeToSeniorFlexBox: {
    textAlign: "center",
    color: Color.globalWhite,
    marginTop: 24,
  },
  homeLayout: {
    width: 134,
    position: "absolute",
  },
  logo1Icon: {
    borderRadius: Border.br_95xl,
    width: 120,
    height: 106,
  },
  vectorIcon: {
    width: 24,
    height: 24,
    display: "none",
    marginTop: 24,
  },
  welcomeToSenior: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    alignSelf: "stretch",
  },
  yourFriendlyChat: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemibold,
    width: 309,
  },
  logo1Parent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    top: 82,
    left: 20,
    alignItems: "center",
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
  welcomeScreen1: {
    backgroundColor: Color.slategray,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default WelcomeScreen1;

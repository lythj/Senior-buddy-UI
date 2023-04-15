import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StepContainer from "../components/StepContainer";
import BowserContainer from "../components/BowserContainer";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const WelcomeScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomeScreen2}>
      <View style={styles.frameParent}>
        <View style={[styles.vectorParent, styles.parentFlexBox]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector3@3x.png")}
          />
          <Text style={styles.welcomeToChatgpt}>{`Welcome to
ChatGPT`}</Text>
          <Text style={styles.textTypo}>Ask anything, get yout answer</Text>
        </View>
        <View style={styles.frameWrapper}>
          <View>
            <View style={styles.parentFlexBox}>
              <Image
                style={styles.logo1Icon}
                resizeMode="cover"
                source={require("../assets/logo-11@3x.png")}
              />
              <Text style={styles.welcomeToChatgpt}>{`Welcome to
Senior Buddy`}</Text>
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../assets/vector5@3x.png")}
              />
              <View style={styles.vectorGroup}>
                <Image
                  style={styles.vectorIcon2}
                  resizeMode="cover"
                  source={require("../assets/vector4@3x.png")}
                />
                <Text style={[styles.capabilities, styles.capabilitiesTypo]}>
                  Capabilities
                </Text>
              </View>
              <Text style={[styles.text, styles.textTypo]}>{`
`}</Text>
            </View>
            <View style={styles.remembersWhatUserSaidEarliWrapper}>
              <Text style={[styles.remembersWhatUser, styles.capabilitiesTypo]}>
                Remembers what user said earlier in the conversation
              </Text>
            </View>
            <View style={styles.remembersWhatUserSaidEarliWrapper}>
              <Text style={[styles.remembersWhatUser, styles.capabilitiesTypo]}>
                Allows user to provide follow-up corrections
              </Text>
            </View>
            <View style={styles.remembersWhatUserSaidEarliWrapper}>
              <Text style={[styles.remembersWhatUser, styles.capabilitiesTypo]}>
                Trained to decline inappropriate requests
              </Text>
            </View>
          </View>
        </View>
        <StepContainer
          onFramePressablePress={() => navigation.navigate("WelcomeScreen3")}
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
  parentFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  capabilitiesTypo: {
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.globalWhite,
  },
  textTypo: {
    fontFamily: FontFamily.ralewaySemibold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    marginTop: 24,
    textAlign: "center",
    color: Color.globalWhite,
  },
  homeLayout: {
    width: 134,
    position: "absolute",
  },
  vectorIcon: {
    height: 24,
    width: 24,
  },
  welcomeToChatgpt: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    marginTop: 24,
    textAlign: "center",
    color: Color.globalWhite,
    alignSelf: "stretch",
  },
  vectorParent: {
    display: "none",
  },
  logo1Icon: {
    borderRadius: Border.br_95xl,
    width: 120,
    height: 106,
  },
  vectorIcon1: {
    height: 9,
    marginTop: 24,
    width: 24,
    display: "none",
  },
  vectorIcon2: {
    width: 18,
    height: 21,
  },
  capabilities: {
    fontSize: FontSize.size_xl,
    marginTop: 12,
  },
  vectorGroup: {
    height: 21,
    marginTop: 24,
    alignItems: "center",
  },
  text: {
    width: 309,
  },
  remembersWhatUser: {
    width: 260,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
  },
  remembersWhatUserSaidEarliWrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray_200,
    width: 335,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    marginTop: 16,
    alignItems: "center",
  },
  frameWrapper: {
    marginTop: 87,
    alignItems: "center",
  },
  frameParent: {
    top: 82,
    left: 20,
    height: 703,
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
  welcomeScreen2: {
    backgroundColor: Color.slategray,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default WelcomeScreen2;

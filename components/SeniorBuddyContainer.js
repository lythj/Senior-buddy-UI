import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const SeniorBuddyContainer = ({
  vectorMarginTop,
  capabilitiesWidth,
  capabilitiesHeight,
  propDisplay,
  propDisplay1,
  propDisplay2,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", vectorMarginTop),
    };
  }, [vectorMarginTop]);

  const logo1IconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", capabilitiesWidth),
      ...getStyleValue("height", capabilitiesHeight),
    };
  }, [capabilitiesWidth, capabilitiesHeight]);

  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("display", propDisplay),
    };
  }, [propDisplay]);

  const capabilitiesStyle = useMemo(() => {
    return {
      ...getStyleValue("display", propDisplay1),
    };
  }, [propDisplay1]);

  const yourFriendlyChatStyle = useMemo(() => {
    return {
      ...getStyleValue("display", propDisplay2),
    };
  }, [propDisplay2]);

  return (
    <View style={[styles.logo1Parent, styles.parentFlexBox, frameViewStyle]}>
      <Image
        style={[styles.logo1Icon, logo1IconStyle]}
        resizeMode="cover"
        source={require("../assets/logo-11@3x.png")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector3@3x.png")}
      />
      <Text
        style={[styles.welcomeToSenior, styles.capabilitiesFlexBox]}
      >{`Welcome to
Senior Buddy`}</Text>
      <View style={[styles.vectorParent, styles.parentFlexBox]}>
        <Image
          style={[styles.vectorIcon1, vectorIconStyle]}
          resizeMode="cover"
          source={require("../assets/vector4@3x.png")}
        />
        <Text
          style={[
            styles.capabilities,
            styles.capabilitiesFlexBox,
            capabilitiesStyle,
          ]}
        >
          Capabilities
        </Text>
      </View>
      <Text
        style={[
          styles.yourFriendlyChat,
          styles.capabilitiesFlexBox,
          yourFriendlyChatStyle,
        ]}
      >{`
Your friendly chat companion`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    marginTop: 24,
  },
  capabilitiesFlexBox: {
    textAlign: "center",
    color: Color.globalWhite,
  },
  logo1Icon: {
    borderRadius: Border.br_95xl,
    width: 112,
    height: 98,
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
    marginTop: 24,
    alignSelf: "stretch",
  },
  vectorIcon1: {
    width: 17,
    height: 20,
  },
  capabilities: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    marginTop: 12,
  },
  vectorParent: {
    marginTop: 24,
  },
  yourFriendlyChat: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemibold,
    width: 309,
    marginTop: 24,
  },
  logo1Parent: {
    marginTop: 24,
    alignSelf: "stretch",
  },
});

export default SeniorBuddyContainer;

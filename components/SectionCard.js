import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SectionCard = ({ onFramePressablePress }) => {
  return (
    <View style={styles.responseExample1Inner}>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <Pressable
          style={[styles.vector1StrokeParent, styles.parentFlexBox]}
          onPress={onFramePressablePress}
        >
          <Image
            style={styles.vector1Stroke}
            resizeMode="cover"
            source={require("../assets/vector-1-stroke1@3x.png")}
          />
          <Text style={styles.back}>Back</Text>
        </Pressable>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector2@3x.png")}
        />
        <Image
          style={styles.logo1Icon}
          resizeMode="cover"
          source={require("../assets/logo-1@3x.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  vector1Stroke: {
    width: 7,
    height: 12,
  },
  back: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemibold,
    color: Color.globalWhite,
    textAlign: "left",
    marginLeft: 12,
  },
  vector1StrokeParent: {
    alignSelf: "stretch",
  },
  vectorIcon: {
    width: 24,
    height: 24,
    display: "none",
  },
  logo1Icon: {
    borderRadius: Border.br_95xl,
    width: 52,
    height: 50,
  },
  frameParent: {
    flex: 1,
    width: 335,
    justifyContent: "space-between",
    overflow: "hidden",
    flexDirection: "row",
  },
  responseExample1Inner: {
    position: "absolute",
    top: 44,
    left: 0,
    backgroundColor: Color.slategray,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.4)",
    borderBottomWidth: 1,
    width: 375,
    height: 65,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default SectionCard;

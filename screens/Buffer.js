import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import BowserContainer from "../components/BowserContainer";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Buffer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.buffer, styles.bufferBg]}>
      <View style={styles.bowserIosFirefoxDarkParent}>
        <BowserContainer batteryBackgroundColor="unset" />
        <View style={[styles.barsHomeIndicatorIphone, styles.homeLayout]}>
          <View style={[styles.homeIndicator, styles.homeLayout]} />
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.parentFlexBox]}>
        <View style={styles.frameChild} />
        <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame9@3x.png")}
          />
        </View>
      </View>
      <View style={[styles.bufferInner, styles.bufferInnerBorder]}>
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <Pressable
            style={[styles.vector1StrokeParent, styles.frameWrapperFlexBox]}
            onPress={() => navigation.navigate("Dashboard1")}
          >
            <Image
              style={styles.vector1Stroke}
              resizeMode="cover"
              source={require("../assets/vector-1-stroke1@3x.png")}
            />
            <Text style={[styles.back, styles.backTypo]}>Back</Text>
          </Pressable>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector1@3x.png")}
          />
        </View>
      </View>
      <View style={styles.frameGroup}>
        <View style={styles.frameContainer}>
          <View
            style={[
              styles.whyIsTheSkyBlueWrapper,
              styles.ellipseParentPosition,
            ]}
          >
            <Text style={styles.backTypo}>Why is the sky blue ?</Text>
          </View>
        </View>
        <View style={styles.frameView}>
          <View style={[styles.ellipseParent, styles.ellipseParentPosition]}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-1@3x.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1@3x.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1@3x.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bufferBg: {
    backgroundColor: Color.darkslategray,
    overflow: "hidden",
  },
  homeLayout: {
    width: 134,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameWrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  bufferInnerBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  backTypo: {
    textAlign: "left",
    color: Color.globalWhite,
    fontFamily: FontFamily.ralewaySemibold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  ellipseParentPosition: {
    padding: Padding.p_xs,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    height: 9,
    width: 9,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    height: 5,
    backgroundColor: Color.globalWhite,
  },
  barsHomeIndicatorIphone: {
    top: 778,
    left: 121,
    height: 34,
  },
  bowserIosFirefoxDarkParent: {
    top: 0,
    right: 0,
    left: 0,
    position: "absolute",
    height: 812,
  },
  frameChild: {
    width: 1,
    height: 28,
    backgroundColor: Color.globalWhite,
  },
  frameIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  frameWrapper: {
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    backgroundColor: Color.seagreen,
    alignItems: "center",
    padding: Padding.p_5xs,
  },
  rectangleParent: {
    top: 699,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray_300,
    borderColor: "rgba(255, 255, 255, 0.32)",
    borderWidth: 1,
    width: 336,
    height: 53,
    padding: Padding.p_5xs,
    borderStyle: "solid",
    position: "absolute",
    left: 20,
  },
  vector1Stroke: {
    width: 7,
    height: 12,
  },
  back: {
    marginLeft: 12,
  },
  vector1StrokeParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  vectorIcon: {
    width: 24,
    height: 24,
  },
  frameParent: {
    width: 335,
    flex: 1,
  },
  bufferInner: {
    top: 44,
    borderColor: "rgba(255, 255, 255, 0.4)",
    borderBottomWidth: 1,
    width: 375,
    height: 65,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    overflow: "hidden",
    backgroundColor: Color.darkslategray,
  },
  whyIsTheSkyBlueWrapper: {
    borderBottomLeftRadius: Border.br_5xs,
    alignSelf: "stretch",
    backgroundColor: Color.seagreen,
  },
  frameContainer: {
    paddingLeft: Padding.p_49xl,
    alignItems: "flex-end",
    width: 335,
    justifyContent: "center",
  },
  frameInner: {
    marginLeft: 5,
  },
  ellipseParent: {
    borderBottomRightRadius: Border.br_5xs,
    backgroundColor: Color.gray_400,
    height: 43,
  },
  frameView: {
    paddingRight: Padding.p_49xl,
    marginTop: 32,
    width: 335,
    justifyContent: "center",
  },
  frameGroup: {
    top: 537,
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  buffer: {
    width: "100%",
    display: "none",
    overflow: "hidden",
    height: 812,
    flex: 1,
  },
});

export default Buffer;

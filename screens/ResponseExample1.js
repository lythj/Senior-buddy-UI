import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BowserContainer from "../components/BowserContainer";
import SectionCard from "../components/SectionCard";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ResponseExample1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.responseExample1}>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View
            style={[styles.whyIsTheSkyBlueWrapper, styles.theWrapperFlexBox]}
          >
            <Text style={styles.theTypo}>Why is the sky blue ?</Text>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={[styles.frameContainer, styles.frameLayout]}>
            <View
              style={[
                styles.theSkyAppearsBlueBecauseOWrapper,
                styles.theWrapperFlexBox,
              ]}
            >
              <Text style={[styles.theSkyAppearsContainer, styles.theTypo]}>
                The sky appears blue because of the scattering of sunlight by
                Earth's atmosphere. As sunlight enters the atmosphere, it
                encounters tiny molecules of gas and other particles in the air.{" "}
                These particles scatter the light in all directions. However,
                blue light is scattered more than other colors because it
                travels in smaller, shorter waves. This is known as Rayleigh
                scattering.
              </Text>
            </View>
          </View>
          <View style={styles.frameView}>
            <View style={styles.frameParent1}>
              <Image
                style={styles.frameIconLayout}
                resizeMode="cover"
                source={require("../assets/frame10@3x.png")}
              />
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11@3x.png")}
              />
            </View>
            <View style={styles.groupParent}>
              <View style={styles.frameIcon3Layout}>
                <View style={[styles.groupChild, styles.groupLayout]} />
                <View style={[styles.groupItem, styles.groupLayout]} />
              </View>
              <Text style={[styles.copy, styles.copyTypo]}>Copy</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[styles.bowserIosFirefoxDarkParent, styles.groupChildPosition]}
      >
        <BowserContainer batteryBackgroundColor="#5e607e" />
        <View style={[styles.barsHomeIndicatorIphone, styles.homeLayout]}>
          <View style={[styles.homeIndicator, styles.homeLayout]} />
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupBorder]}>
        <View style={styles.frameChild} />
        <View style={[styles.frameFrame, styles.frameFlexBox]}>
          <Image
            style={styles.frameIconLayout}
            resizeMode="cover"
            source={require("../assets/frame9@3x.png")}
          />
        </View>
      </View>
      <SectionCard
        onFramePressablePress={() => navigation.navigate("Dashboard")}
      />
      <Pressable
        style={[styles.framePressable, styles.frameFlexBox]}
        onPress={() => navigation.navigate("Buffer")}
      >
        <Image
          style={[styles.frameIcon3, styles.frameIcon3Layout]}
          resizeMode="cover"
          source={require("../assets/frame12@3x.png")}
        />
        <Text style={[styles.regenerateResponse, styles.copyTypo]}>
          Regenerate response
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    left: 20,
    alignItems: "center",
    position: "absolute",
  },
  frameLayout: {
    width: 335,
    justifyContent: "center",
  },
  theWrapperFlexBox: {
    padding: Padding.p_xs,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  theTypo: {
    textAlign: "left",
    color: Color.globalWhite,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.ralewaySemibold,
    fontWeight: "600",
  },
  frameIconLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  groupLayout: {
    height: 8,
    width: 8,
    position: "absolute",
  },
  copyTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.globalWhite,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  homeLayout: {
    width: 134,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  frameFlexBox: {
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    alignItems: "center",
  },
  frameIcon3Layout: {
    height: 12,
    width: 12,
  },
  whyIsTheSkyBlueWrapper: {
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.darkkhaki,
  },
  frameWrapper: {
    paddingLeft: Padding.p_49xl,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  theSkyAppearsContainer: {
    lineHeight: 24,
    flex: 1,
  },
  theSkyAppearsBlueBecauseOWrapper: {
    borderBottomRightRadius: Border.br_5xs,
    backgroundColor: "#0ea3c1",
  },
  frameContainer: {
    paddingRight: Padding.p_21xl,
    justifyContent: "center",
  },
  frameIcon1: {
    marginLeft: 16,
  },
  frameParent1: {
    width: 56,
    flexDirection: "row",
  },
  groupChild: {
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 4,
    left: 4,
    backgroundColor: Color.globalWhite,
  },
  copy: {
    marginLeft: 12,
    fontFamily: FontFamily.ralewaySemibold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  groupParent: {
    justifyContent: "flex-end",
    marginLeft: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  frameView: {
    opacity: 0.4,
    marginTop: 12,
    paddingRight: Padding.p_21xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameGroup: {
    marginTop: 32,
  },
  frameParent: {
    bottom: 199,
    alignItems: "center",
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
    right: 0,
    position: "absolute",
    height: 812,
  },
  frameChild: {
    width: 1,
    height: 28,
    backgroundColor: Color.globalWhite,
  },
  frameFrame: {
    padding: Padding.p_5xs,
    backgroundColor: Color.darkkhaki,
    justifyContent: "center",
  },
  rectangleGroup: {
    top: 699,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray_300,
    borderColor: "rgba(255, 255, 255, 0.32)",
    width: 336,
    height: 53,
    justifyContent: "space-between",
    padding: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon3: {
    overflow: "hidden",
  },
  regenerateResponse: {
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    marginLeft: 10,
  },
  framePressable: {
    top: 653,
    left: 93,
    backgroundColor: Color.gray_100,
    borderColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  responseExample1: {
    backgroundColor: Color.slategray,
    width: "100%",
    overflow: "hidden",
    height: 812,
    flex: 1,
  },
});

export default ResponseExample1;

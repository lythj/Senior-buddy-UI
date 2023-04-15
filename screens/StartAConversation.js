import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import BowserContainer from "../components/BowserContainer";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const StartAConversation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startAConversation}>
      <View style={styles.bowserIosFirefoxDarkParent}>
        <BowserContainer batteryBackgroundColor="unset" />
        <View style={[styles.barsHomeIndicatorIphone, styles.homeLayout]}>
          <View style={[styles.homeIndicator, styles.homeLayout]} />
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <View style={styles.parentFlexBox}>
          <Text style={styles.backTypo}>Why is the sky blue ?</Text>
          <View style={styles.frameChild} />
        </View>
        <Pressable
          style={[styles.frameWrapper, styles.frameWrapperFlexBox]}
          onPress={() => navigation.navigate("ChatExample1")}
        >
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame9@3x.png")}
          />
        </Pressable>
      </View>
      <View
        style={[styles.startAConversationInner, styles.frameWrapperFlexBox]}
      >
        <View style={[styles.frameGroup, styles.frameFlexBox]}>
          <Pressable
            style={[styles.vector1StrokeParent, styles.parentFlexBox]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    width: 134,
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  backTypo: {
    textAlign: "left",
    color: Color.globalWhite,
    fontFamily: FontFamily.ralewaySemibold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
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
    marginLeft: 8,
    backgroundColor: Color.globalWhite,
  },
  frameIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  frameWrapper: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.seagreen,
    padding: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  frameParent: {
    top: 699,
    left: 20,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray_300,
    shadowColor: "rgba(255, 255, 255, 0.2)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    borderColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 1,
    width: 336,
    height: 53,
    padding: Padding.p_5xs,
    borderStyle: "solid",
    position: "absolute",
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
  },
  vectorIcon: {
    width: 24,
    height: 24,
  },
  frameGroup: {
    width: 335,
    flex: 1,
    justifyContent: "space-between",
  },
  startAConversationInner: {
    top: 44,
    borderColor: "rgba(255, 255, 255, 0.4)",
    borderBottomWidth: 1,
    width: 375,
    height: 65,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    borderStyle: "solid",
    position: "absolute",
    left: 0,
    overflow: "hidden",
    justifyContent: "center",
    backgroundColor: Color.darkslategray,
  },
  startAConversation: {
    width: "100%",
    display: "none",
    overflow: "hidden",
    height: 812,
    flex: 1,
    backgroundColor: Color.darkslategray,
  },
});

export default StartAConversation;

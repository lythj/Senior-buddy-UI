import React, { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BowserContainer from "../components/BowserContainer";
import ChatBox from "../components/ChatBox";
import Settings from "../components/Settings";
import UpdatesSection from "../components/UpdatesSection";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Dashboard = () => {
  const navigation = useNavigation();
  const [vectorIconVisible, setVectorIconVisible] = useState(false);

  const openVectorIcon = useCallback(() => {
    setVectorIconVisible(true);
  }, []);

  const closeVectorIcon = useCallback(() => {
    setVectorIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.dashboard}>
        <View style={styles.bowserIosFirefoxDarkParent}>
          <BowserContainer />
          <View style={[styles.barsHomeIndicatorIphone, styles.homeLayout]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
        <View style={styles.frameParent}>
          <ChatBox
            chatTitle="New Chat"
            onFramePressablePress={() =>
              navigation.navigate("EmptyConversation")
            }
          />
          <Pressable
            style={styles.frameGroup}
            onPress={() => navigation.navigate("ResponseExample1")}
          >
            <View style={styles.frameContainer}>
              <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../assets/frame3@3x.png")}
              />
              <Text style={styles.whyIsThe}>Why is the sky blue ?</Text>
            </View>
            <Pressable
              style={[styles.vector, styles.vectorSpaceBlock]}
              onPress={openVectorIcon}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/vector@3x.png")}
              />
            </Pressable>
            <Image
              style={[styles.vector1Stroke, styles.vectorSpaceBlock]}
              resizeMode="cover"
              source={require("../assets/vector-1-stroke@3x.png")}
            />
          </Pressable>
        </View>
        <UpdatesSection
          upgradeText="Upgrade to Plus"
          faqText={`Updates & FAQ`}
          onFramePressablePress={() => navigation.navigate("LoadingScreen")}
        />
      </View>

      <Modal animationType="fade" transparent visible={vectorIconVisible}>
        <View style={styles.vectorIconOverlay}>
          <Pressable style={styles.vectorIconBg} onPress={closeVectorIcon} />
          <Settings onClose={closeVectorIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    width: 134,
    position: "absolute",
  },
  vectorSpaceBlock: {
    marginLeft: 28,
    height: 12,
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
    top: 0,
    right: 0,
    left: 0,
    position: "absolute",
    height: 812,
  },
  frameIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  whyIsThe: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    color: Color.globalWhite,
    textAlign: "left",
    width: 299,
    marginLeft: 16,
  },
  frameContainer: {
    flexDirection: "row",
    flex: 1,
  },
  vectorIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    width: 3,
  },
  vector1Stroke: {
    width: 7,
  },
  frameGroup: {
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.4)",
    borderBottomWidth: 1,
    width: 335,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    marginTop: 12,
    flexDirection: "row",
    overflow: "hidden",
  },
  frameParent: {
    top: 64,
    left: 20,
    position: "absolute",
  },
  dashboard: {
    backgroundColor: Color.gray_100,
    display: "none",
    overflow: "hidden",
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default Dashboard;

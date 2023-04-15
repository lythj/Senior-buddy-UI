import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BowserContainer from "../components/BowserContainer";
import ChatBox from "../components/ChatBox";
import UpdatesSection from "../components/UpdatesSection";
import { Border, Color } from "../GlobalStyles";

const Dashboard1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboard}>
      <View style={styles.bowserIosFirefoxDarkParent}>
        <BowserContainer batteryBackgroundColor="unset" />
        <View style={[styles.barsHomeIndicatorIphone, styles.homeLayout]}>
          <View style={[styles.homeIndicator, styles.homeLayout]} />
        </View>
      </View>
      <ChatBox
        chatTitle="Chat"
        propPosition="absolute"
        propTop={64}
        propLeft={20}
        onFramePressablePress={() => navigation.navigate("EmptyConversation")}
      />
      <UpdatesSection
        upgradeText="Wumbo Mode"
        faqText="Profile "
        onFramePressablePress={() => navigation.navigate("LoadingScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    width: 134,
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
  bowserIosFirefoxDarkParent: {
    top: 0,
    right: 0,
    left: 0,
    position: "absolute",
    height: 812,
  },
  dashboard: {
    backgroundColor: "#13a5c3",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default Dashboard1;

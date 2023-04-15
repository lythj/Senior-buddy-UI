import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const UpdatesSection = ({ upgradeText, faqText, onFramePressablePress }) => {
  return (
    <View style={styles.dashboardInner}>
      <View>
        <View style={styles.frameFlexBox}>
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame4@3x.png")}
            />
            <Text style={[styles.clearConversations, styles.logoutTypo]}>
              Clear conversations
            </Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame5@3x.png")}
            />
            <Text style={[styles.clearConversations, styles.logoutTypo]}>
              {upgradeText}
            </Text>
          </View>
          <View style={styles.newWrapper}>
            <Text style={styles.new}>NEW</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame6@3x.png")}
            />
            <Text style={[styles.clearConversations, styles.logoutTypo]}>
              Light mode
            </Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame7@3x.png")}
            />
            <Text style={[styles.clearConversations, styles.logoutTypo]}>
              {faqText}
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.frameContainer, styles.frameFlexBox]}
          onPress={onFramePressablePress}
        >
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame8@3x.png")}
            />
            <Text style={[styles.logout, styles.logoutTypo]}>Logout</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoutTypo: {
    marginLeft: 16,
    width: 299,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    width: 335,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frameIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  clearConversations: {
    color: Color.globalWhite,
  },
  frameGroup: {
    flexDirection: "row",
  },
  new: {
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemibold,
    color: Color.olive,
    textAlign: "left",
  },
  newWrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.palegoldenrod,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_12xs_5,
    justifyContent: "center",
    height: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  frameContainer: {
    marginTop: 8,
  },
  logout: {
    color: Color.lightcoral,
  },
  dashboardInner: {
    position: "absolute",
    bottom: 23,
    left: 0,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.4)",
    borderTopWidth: 1,
    width: 375,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default UpdatesSection;

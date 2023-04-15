import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ChatBox = ({
  chatTitle,
  propPosition,
  propTop,
  propLeft,
  onFramePressablePress,
}) => {
  const framePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("position", propPosition),
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <Pressable
      style={[styles.frameParent, framePressableStyle]}
      onPress={onFramePressablePress}
    >
      <View style={styles.frameGroup}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame2@3x.png")}
        />
        <Text style={styles.newChat}>{chatTitle}</Text>
      </View>
      <Image
        style={styles.vector1Stroke}
        resizeMode="cover"
        source={require("../assets/vector-1-stroke@3x.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  newChat: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    color: Color.globalWhite,
    textAlign: "left",
    width: 299,
    marginLeft: 16,
  },
  frameGroup: {
    flex: 1,
    flexDirection: "row",
  },
  vector1Stroke: {
    width: 7,
    height: 12,
    marginLeft: 16,
  },
  frameParent: {
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.4)",
    borderBottomWidth: 1,
    width: 335,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default ChatBox;

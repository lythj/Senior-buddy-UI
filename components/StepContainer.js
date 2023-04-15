import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const StepContainer = ({
  propMarginTop,
  propBackgroundColor,
  propBackgroundColor1,
  onFramePressablePress,
}) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor1),
    };
  }, [propBackgroundColor1]);

  return (
    <View style={[styles.frameParent, frameView2Style]}>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, rectangleViewStyle]} />
        <View
          style={[styles.frameItem, styles.frameLayout, rectangleView1Style]}
        />
        <View style={[styles.frameInner, styles.frameLayout]} />
      </View>
      <Pressable style={styles.nextWrapper} onPress={onFramePressablePress}>
        <Text style={styles.next}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    marginLeft: 12,
    height: 2,
    width: 28,
    borderRadius: Border.br_xs,
  },
  frameChild: {
    height: 2,
    width: 28,
    borderRadius: Border.br_xs,
    backgroundColor: Color.gray_400,
  },
  frameItem: {
    backgroundColor: Color.darkkhaki,
  },
  frameInner: {
    backgroundColor: Color.gray_400,
    marginLeft: 12,
  },
  rectangleParent: {
    flexDirection: "row",
  },
  next: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    color: Color.globalWhite,
    textAlign: "center",
  },
  nextWrapper: {
    borderRadius: Border.br_5xs,
    width: 335,
    height: 48,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: Color.darkkhaki,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent: {
    marginTop: 87,
    alignItems: "center",
  },
});

export default StepContainer;

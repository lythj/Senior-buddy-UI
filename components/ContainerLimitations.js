import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ContainerLimitations = ({
  apiKey,
  limitationsText,
  incorrectInfoText,
  biasedContentText,
  funFactText,
  propHeight,
  propMarginTop,
  propWidth,
  propHeight1,
  propOverflow,
}) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propHeight, propMarginTop]);

  const groupIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight1),
      ...getStyleValue("overflow", propOverflow),
    };
  }, [propWidth, propHeight1, propOverflow]);

  return (
    <View style={[styles.frameParent, frameView1Style]}>
      <View style={styles.groupParent}>
        <Image
          style={[styles.frameChild, groupIconStyle]}
          resizeMode="cover"
          source={apiKey}
        />
        <Text style={[styles.limitations, styles.limitationsTypo]}>
          {limitationsText}
        </Text>
      </View>
      <View style={styles.frameGroup}>
        <View style={styles.mayWrapperFlexBox}>
          <Text
            style={[styles.mayOccasionallyGenerate, styles.limitationsTypo]}
          >
            {incorrectInfoText}
          </Text>
        </View>
        <View
          style={[
            styles.mayOccasionallyProduceHarmfWrapper,
            styles.mayWrapperFlexBox,
          ]}
        >
          <Text
            style={[styles.mayOccasionallyGenerate, styles.limitationsTypo]}
          >
            {biasedContentText}
          </Text>
        </View>
        <View
          style={[
            styles.mayOccasionallyProduceHarmfWrapper,
            styles.mayWrapperFlexBox,
          ]}
        >
          <Text
            style={[styles.mayOccasionallyGenerate, styles.limitationsTypo]}
          >
            {funFactText}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  limitationsTypo: {
    textAlign: "center",
    color: Color.globalWhite,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
  },
  mayWrapperFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    width: 335,
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  frameChild: {
    width: 24,
    height: 21,
  },
  limitations: {
    fontSize: FontSize.size_xl,
    marginTop: 12,
  },
  groupParent: {
    alignItems: "center",
  },
  mayOccasionallyGenerate: {
    fontSize: FontSize.size_base,
    width: 260,
  },
  mayOccasionallyProduceHarmfWrapper: {
    marginTop: 16,
  },
  frameGroup: {
    marginTop: 40,
  },
  frameParent: {
    height: 343,
    marginTop: -69,
    alignItems: "center",
  },
});

export default ContainerLimitations;

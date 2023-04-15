import React, { useMemo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BowserContainer = ({ batteryBackgroundColor }) => {
  const bowserIOSFirefoxDarkStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", batteryBackgroundColor),
    };
  }, [batteryBackgroundColor]);

  return (
    <View
      style={[
        styles.bowserIosFirefoxDark,
        styles.bowserIosFirefoxDarkPosition,
        bowserIOSFirefoxDarkStyle,
      ]}
    >
      <View style={styles.bowserIosFirefoxDarkPosition}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>3:30</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bowserIosFirefoxDarkPosition: {
    height: 44,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.globalWhite,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 14,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    top: 6,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.globalWhite,
    textAlign: "center",
    width: 54,
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "15.91%",
    right: "80%",
    bottom: "36.36%",
    left: "5.6%",
    position: "absolute",
  },
  bowserIosFirefoxDark: {
    overflow: "hidden",
  },
});

export default BowserContainer;

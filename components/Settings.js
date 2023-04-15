import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Settings = ({ onClose }) => {
  return (
    <View style={styles.settings}>
      <View style={styles.frameFlexBox}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame@3x.png")}
        />
        <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
      </View>
      <View style={[styles.frameGroup, styles.frameFlexBox]}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame1@3x.png")}
        />
        <Text style={[styles.delete, styles.editTypo]}>Delete</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  editTypo: {
    marginLeft: 12,
    textAlign: "left",
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  edit: {
    color: Color.globalWhite,
  },
  delete: {
    color: Color.lightcoral,
  },
  frameGroup: {
    marginTop: 16,
  },
  settings: {
    borderBottomRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_9xs,
    backgroundColor: Color.darkslategray,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 9,
    display: "none",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Settings;

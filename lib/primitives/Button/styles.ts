import { StyleSheet } from "react-native";
import { t } from "react-native-tailwindcss";

export const defaultButtonStyle = StyleSheet.flatten([
  t.bgIndigo700,
  t.flexRow,
  t.pX8,
  t.pY4,
  t.rounded,
  t.shadowMd,
  t.itemsCenter
]);
export const defaultLabelStyle = StyleSheet.flatten([
  t.textBase,
  t.fontSemibold,
  t.textWhite
]);

export const defaultIconStyle = StyleSheet.flatten([t.textWhite, t.text2xl]);

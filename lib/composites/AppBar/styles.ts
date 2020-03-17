import { StyleSheet } from "react-native";
import { t } from "react-native-tailwindcss";

const styles = StyleSheet.create({
  appBar: {
    height: 64 // Tailwindcss has no height
  }
});

export const defaultAppBarStyle = StyleSheet.flatten([
  t.bgIndigo700,
  t.itemsCenter,
  t.flexRow,
  t.pX2,
  t.shadowLg,
  styles.appBar
]);

export const defaultTitleStyle = StyleSheet.flatten([
  t.fontBold,
  t.mL2,
  t.textLg,
  t.textWhite
]);

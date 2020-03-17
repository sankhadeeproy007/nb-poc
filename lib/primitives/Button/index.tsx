/* eslint-disable react/destructuring-assignment */
import React, { ComponentProps } from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableWithoutFeedback,
  ViewStyle
} from "react-native";
import Ripple from "react-native-material-ripple";
import { MaterialIcons } from "@expo/vector-icons";
import { color, t } from "react-native-tailwindcss";

import Text from "../Text";

import {
  defaultButtonStyle,
  defaultIconStyle,
  defaultLabelStyle
} from "./styles";

type TouchableProps = ComponentProps<typeof TouchableWithoutFeedback> & {
  buttonStyle?: StyleProp<ViewStyle>;
  expand?: boolean;
  icon?: {
    name: string;
    position: "left" | "right";
    style?: TextStyle | {};
  };
  label?: string;
  labelStyle?: TextStyle;
  loading?: boolean;
  outline?: boolean;
  rippleOpacity?: number;
  rippleColor?: string;
  rounded?: boolean;
  transparent?: boolean;
  variant?: "primary" | "secondary" | "error";
};

const Touchable = (props: TouchableProps) => {
  const flattenedButtonStyle: StyleProp<ViewStyle> = StyleSheet.flatten([
    defaultButtonStyle,
    ...(props.transparent ? [t.bgTransparent] : []),
    ...(props.rounded ? [t.roundedFull] : []),
    ...(props.rounded ? [t.pY4, t.pX4] : []),
    props.buttonStyle
  ]);

  const flattenedLabelStyle: StyleProp<TextStyle> = StyleSheet.flatten([
    defaultLabelStyle,
    ...(props.transparent ? [t.textIndigo700] : []),
    props.labelStyle
  ]);
  const flattenedIconStyle: StyleProp<TextStyle> = StyleSheet.flatten([
    defaultIconStyle,
    ...(props.transparent ? [t.textIndigo700] : []),
    props.icon?.style
  ]);
  return (
    <Ripple
      rippleColor={props.rippleColor ?? color.white}
      rippleContainerBorderRadius={props.rounded ? 999 : 0}
      style={flattenedButtonStyle}
      {...props}
    >
      {props.icon && props.icon.position === "left" && (
        <MaterialIcons name={props.icon.name} style={flattenedIconStyle} />
      )}
      <Text style={flattenedLabelStyle}>{props.label || ""}</Text>
      {props.icon && props.icon.position === "right" && (
        <MaterialIcons name={props.icon.name} style={flattenedIconStyle} />
      )}
    </Ripple>
  );
};
export default Touchable;

/* eslint-disable react/destructuring-assignment */
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { getColorFromProps } from "../../utils";
import { useTheme } from "../../theme";

export type ButtonProps = React.ComponentProps<typeof TouchableOpacity> & {
  buttonStyle?: ViewStyle;
  expand?: boolean;
  icon?: {
    name: string;
    position: "left" | "right";
    style?: TextStyle;
  };
  label?: string;
  labelStyle?: TextStyle;
  loading?: boolean;
  outline?: boolean;
  transparent?: boolean;
  variant?: "primary" | "secondary" | "error";
};

const Button = (props: ButtonProps) => {
  const theme = useTheme();

  const { COLORS, SPACING, TYPOGRAPHY } = theme;

  const styles = StyleSheet.create({
    buttonStyle: {
      alignItems: "center",
      alignSelf: props.expand ? "stretch" : "auto",
      backgroundColor: getColorFromProps(props, COLORS).backgroundColor,
      borderColor: getColorFromProps(props, COLORS).borderColor,
      borderRadius: SPACING.SM / 2,
      borderWidth: 1,
      flexDirection: "row",
      justifyContent: "center",
      paddingHorizontal: SPACING.XLG,
      paddingVertical: SPACING.SM
    },
    iconStyle: {
      marginRight:
        props?.icon?.position === "left" && props.label ? SPACING.XXSM : 0,
      marginLeft:
        props?.icon?.position === "right" && props.label ? SPACING.XXSM : 0
    },
    labelStyle: {
      color: getColorFromProps(props, COLORS).color,
      fontSize: TYPOGRAPHY.SIZE.MD,
      fontWeight: "600"
    }
  });

  const buttonStyle = StyleSheet.flatten([
    styles.buttonStyle,
    props.buttonStyle
  ]);

  const iconStyle = StyleSheet.flatten([styles.iconStyle, props?.icon?.style]);

  const labelStyle = StyleSheet.flatten([styles.labelStyle, props.labelStyle]);

  return (
    <TouchableOpacity
      disabled={props.loading}
      activeOpacity={0.6}
      style={buttonStyle}
      {...props}
    >
      {props.loading ? (
        <ActivityIndicator color={getColorFromProps(props, COLORS).color} />
      ) : (
        <>
          {props.icon && props.icon.position === "left" && (
            <MaterialIcons
              name={props.icon.name}
              color={getColorFromProps(props, COLORS).color}
              size={TYPOGRAPHY.SIZE.XLG}
              style={iconStyle}
            />
          )}
          <Text style={labelStyle}>{props.label || ""}</Text>
          {props.icon && props.icon.position === "right" && (
            <MaterialIcons
              name={props.icon.name}
              color={getColorFromProps(props, COLORS).color}
              size={TYPOGRAPHY.SIZE.XLG}
              style={iconStyle}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};
export default Button;

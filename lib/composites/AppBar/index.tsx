/* eslint-disable react/destructuring-assignment */
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewProps,
  ViewStyle
} from "react-native";

import { t } from "react-native-tailwindcss";
import Text from "../../primitives/Text";
import Button from "../../primitives/Button";

import { defaultAppBarStyle, defaultTitleStyle } from "./styles";

export type AppBarAction = {
  iconName: string;
  onPress: () => void;
  style?: TextStyle;
};

type AppBarProps = ViewProps & {
  title?: string;
  titleStyle?: TextStyle;
  leading?: AppBarAction;
  actions?: Array<AppBarAction>;
};

const AppBar = (props: AppBarProps) => {
  const flattenedAppBarStyle: StyleProp<ViewStyle> = StyleSheet.flatten([
    defaultAppBarStyle,
    props.style
  ]);
  const flattenedTitleStyle: StyleProp<TextStyle> = StyleSheet.flatten([
    defaultTitleStyle,
    props.titleStyle
  ]);

  return (
    <View style={flattenedAppBarStyle}>
      <Button
        rounded
        transparent
        buttonStyle={t.shadowNone}
        disabled={!props.leading?.iconName}
        icon={{
          name: props.leading?.iconName || "menu",
          position: "left",
          style: props.leading?.iconName
            ? [
                t.textWhite,
                ...(props.leading?.style ? [props.leading?.style] : [])
              ]
            : {}
        }}
        onPress={props.leading?.onPress}
      />
      <Text style={flattenedTitleStyle}>{props.title || ""}</Text>
      <View style={[t.flex1, t.justifyEnd, t.flexRow]}>
        {(props.actions?.length ?? 0) > 0 &&
          props.actions?.map((action: AppBarAction) => (
            <Button
              key={action.iconName}
              rounded
              transparent
              buttonStyle={t.shadowNone}
              icon={{
                name: action.iconName,
                position: "left",
                style: [t.textWhite, ...(action.style ? [action.style] : [])]
              }}
              onPress={action.onPress}
            />
          ))}
      </View>
    </View>
  );
};
export default AppBar;

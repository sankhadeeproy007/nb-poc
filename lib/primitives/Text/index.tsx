import React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

type NBTextProps = TextProps & {
  style?: StyleProp<TextStyle>;
  children: string;
};

const NBText = (props: NBTextProps) => {
  return <Text {...props} />;
};
export default NBText;

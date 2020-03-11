import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "./lib/components/Button";
import { ThemeProvider, useTheme } from "./lib/theme";

import theme from "./theme";

export default function App() {
  const [clicked, setClicked] = useState(0);
  const [defaultTheme, setDefaultTheme] = useState(true);

  const currentTheme = useTheme();

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      backgroundColor: currentTheme.COLORS.BACKGROUND,
      flex: 1,
      justifyContent: "center",
      padding: 20
    },
    mt20: { marginTop: 20 },
    textStyle: {
      color: currentTheme.COLORS.ON_BACKGROUND,
      fontSize: 26,
      marginBottom: 20
    }
  });

  return (
    <ThemeProvider {...(defaultTheme && { theme })}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{clicked}</Text>
        <Button
          label="Primary Set Counter"
          onPress={() =>
            setClicked((prevClicked: number): number => prevClicked + 1)
          }
        />
        <Button
          variant="error"
          outline
          buttonStyle={styles.mt20}
          label="Error Button"
        />
        <Button
          variant="secondary"
          buttonStyle={styles.mt20}
          label="Secondary Button"
        />
        <Button
          transparent
          buttonStyle={styles.mt20}
          label="Transparent Button"
        />
        <Button
          variant="error"
          buttonStyle={styles.mt20}
          expand
          label="Error Expanded"
        />
        <Button
          variant="secondary"
          icon={{ name: "alarm", position: "left" }}
          buttonStyle={styles.mt20}
          label="Icon Button"
        />
        <Button
          outline
          icon={{ name: "all-inclusive", position: "right" }}
          buttonStyle={styles.mt20}
          label="Toggle theme"
          expand
          onPress={() =>
            setDefaultTheme((prevTheme: boolean): boolean => !prevTheme)
          }
        />
      </View>
    </ThemeProvider>
  );
}

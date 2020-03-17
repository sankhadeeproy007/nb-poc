import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { t } from "react-native-tailwindcss";

// import Button from "./lib/components/Button";

import Button from "./lib/primitives/Button/index";
import AppBar, { AppBarAction } from "./lib/composites/AppBar";

export default function App() {
  const [clicked, setClicked] = useState(0);

  const actions: Array<AppBarAction> = [
    {
      iconName: "chat",
      onPress: () =>
        setClicked((prevClicked: number): number => prevClicked + 5)
      // style: t.textRed600
    },
    {
      iconName: "favorite",
      onPress: () =>
        setClicked((prevClicked: number): number => prevClicked * 1.5)
    },
    {
      iconName: "loop",
      onPress: () => setClicked(0)
    }
  ];

  return (
    <SafeAreaView style={[t.bgIndigo700, t.flex1]}>
      <AppBar
        leading={{
          iconName: "menu",
          onPress: () =>
            setClicked((prevClicked: number): number => prevClicked - 1)
        }}
        title="Header"
        actions={actions}
      />
      <View style={[t.itemsCenter, t.bgWhite, t.flex1, t.justifyCenter, t.p10]}>
        <Text style={[t.textBlack, t.text3xl, t.mB2]}>{clicked}</Text>
        <Button
          onPress={() =>
            setClicked((prevClicked: number): number => prevClicked + 1)
          }
          label="Clickkk!"
        />
      </View>
    </SafeAreaView>
  );
}

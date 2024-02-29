import { Text, View } from "@/components/Themed";
import { useCart } from "@/providers/CartProviders";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";

type Props = {};

const cartScreen = (props: Props) => {
  const { items, onAddItem} = useCart();
  return (
    <View>
      <Text>Cart items length : {items.length}</Text>
      <StatusBar style={Platform.OS === "android" ? "light" : "auto"} />
    </View>
  );
};

export default cartScreen;

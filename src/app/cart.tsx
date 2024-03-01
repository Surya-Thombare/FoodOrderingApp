import CartListItem from "@/components/CartListItem";
import { Text, View } from "@/components/Themed";
import { useCart } from "@/providers/CartProviders";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Platform } from "react-native";

type Props = {};

const cartScreen = (props: Props) => {
  const { items, onAddItem } = useCart();
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{
          padding: 10,
          gap: 10
        }}
      />
      <StatusBar style={Platform.OS === "android" ? "light" : "auto"} />
    </View>
  );
};

export default cartScreen;

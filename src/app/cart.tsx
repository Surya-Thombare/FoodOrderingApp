import Button from "@/components/Button";
import CartListItem from "@/components/CartListItem";
import { Text, View } from "@/components/Themed";
import { useCart } from "@/providers/CartProviders";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Platform } from "react-native";

type Props = {};

const cartScreen = (props: Props) => {
  const { items, total } = useCart();
  return (
    <View style={{padding: 10}}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{
          padding: 10,
          gap: 10
        }}
      />
      <Text style={{marginTop: 20, fontSize: 20, fontWeight: '500'}}>Total: ${total.toFixed(2)}</Text>
      <Button text="checkout"/>
      <StatusBar style={Platform.OS === "android" ? "light" : "auto"} />
    </View>
  );
};

export default cartScreen;

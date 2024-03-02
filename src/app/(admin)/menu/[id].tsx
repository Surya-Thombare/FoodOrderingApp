import { Text, View } from "@/components/Themed";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import products from "@assets/data/products";
import { defaultPizzaImage } from "@/components/productListItem";
import { Image, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import Button from "@/components/Button";
import { useCart } from "@/providers/CartProviders";
import { PizzaSize } from "@/types";
import { useRouter } from "expo-router";


const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

type Props = {};

const ProductDetailsScreen = (props: Props) => {

  const router = useRouter()

  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");

  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id.toString() === id);

  const AddToCart = () => {
    if (!product) {
      return
    }
    addItem(product, selectedSize)
    router.push('/cart')
  }

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />
      

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
  }
});

export default ProductDetailsScreen;

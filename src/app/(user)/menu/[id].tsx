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
      <Text>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
          onPress={() => setSelectedSize(size)}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selectedSize === size ? "black" : "grey" },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={AddToCart} text="Add To Cart" />
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
    marginTop: 'auto'
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default ProductDetailsScreen;

import Button from "@/components/Button";
import { Text, View } from "@/components/Themed";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const resetFields = () => {
    setName('');
    setPrice('');
  }

  const onCreate = () => {
    console.warn("creating product");

    resetFields();
  };
  return (
    <View style={styles.continer}>
      <Text style={styles.lable}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="name"
        style={styles.input}
      />

      <Text style={styles.lable}>Price</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="9.99"
        style={styles.input}
        keyboardType="numeric"
      />
      <Button text="create" onPress={onCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  lable: {
    color: "gray",
  },
});

export default CreateProductScreen;

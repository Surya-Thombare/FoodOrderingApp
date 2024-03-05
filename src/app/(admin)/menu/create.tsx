import Button from "@/components/Button";
import { Text, View } from "@/components/Themed";
import { defaultPizzaImage } from "@/components/productListItem";
import Colors from "@/constants/Colors";
import { useState } from "react";
import { Alert, Image, StyleSheet, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Stack, useLocalSearchParams } from "expo-router";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState<string | null>("");

  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

  const resetFields = () => {
    setName("");
    setPrice("");
  };

  const validateInput = () => {
    setError("");

    if (!name) {
      setError("Please enter name");
      return false;
    }
    if (!price) {
      setError("Please enter price");
      return false;
    }

    if (isNaN(parseFloat(price))) {
      setError("Price is not a number");
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmit = () => {
    if (isUpdating) {
      onUpdate();
    } else {
      onCreate();
    }
  };

  const onUpdate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("updating product");

    resetFields();
  };

  const onCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("creating product");

    resetFields();
  };

  const onDelete = () => {
    console.warn("deleting product");
  };

  const confirmDelete = () => {
    Alert.alert('Confirm,',"Are you sure you want to delete this product?", [
      {
        text: "Cancel",
      },
      {
        text: 'Delete',
        style: "destructive",
        onPress: onDelete
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: isUpdating ? "Update product " : "Create Product" }}
      />
      <Image
        source={{ uri: image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text onPress={pickImage} style={styles.textButton}>
        Select Image
      </Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="name"
        style={styles.input}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="9.99"
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={{ color: "red" }}>{error}</Text>
      <Button text={isUpdating ? "Update" : "Create"} onPress={onSubmit} />
      {isUpdating && (
        <Text style={styles.textButton} onPress={confirmDelete}>
          Delete
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },

  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
});

export default CreateProductScreen;

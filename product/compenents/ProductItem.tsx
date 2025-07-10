import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Product } from "../Product";

interface Props {
  item: Product;
}

const ProductItem= ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    backgroundColor: "#fafafa",
    alignItems: "center",
  },
  image: { width: 100, height: 100, resizeMode: "contain", marginBottom: 8 },
  title: { fontSize: 14, fontWeight: "bold", textAlign: "center" },
  price: { fontSize: 12, color: "green", marginTop: 4 },
});

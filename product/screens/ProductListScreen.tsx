import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import ProductItem from "../compenents/ProductItem";
import { useCategories } from "../hooks/useCategories";
import { useProducts } from "../hooks/useProducts";


const ProductListScreen = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { categories } = useCategories();
  const { products, fetchProducts, loading, hasMore } = useProducts(
    search,
    selectedCategory
  );

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="blue" style={{ margin: 10 }} />;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search products..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Category Filter */}
<FlatList
  horizontal
  data={[{ slug: "", name: "All" }, ...categories]}
  keyExtractor={(item, index) => (item.slug ?? index).toString()}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === item.slug && styles.categoryButtonActive,
      ]}
      onPress={() => setSelectedCategory(item.slug)}
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item.slug && styles.categoryTextActive,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  )}
  showsHorizontalScrollIndicator={false}
/>

    
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductItem item={item} />}
        numColumns={2}
        contentContainerStyle={styles.list}
        onEndReached={() => hasMore && fetchProducts()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        initialNumToRender={6}
        removeClippedSubviews
        getItemLayout={(_, index) => ({
          length: 220,
          offset: 220 * index,
          index,
        })}
      />
    </View>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 10, backgroundColor: "#fff" },
  search: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 5,
  },
  categoryButtonActive: { backgroundColor: "blue" },
  categoryText: { color: "#333" },
  categoryTextActive: { color: "#fff" },
  list: { paddingBottom: 20 },
});

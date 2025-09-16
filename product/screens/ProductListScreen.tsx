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
      minWidth: 90,
      height: 44,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 0,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: "#ccc",
      marginHorizontal: 6,
      marginVertical: 8,
      backgroundColor: '#f5f5f5',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.08,
      shadowRadius: 2,
      elevation: 1,
    },
  categoryButtonActive: { backgroundColor: "blue" },
  categoryText: { color: "#333" },
  categoryTextActive: { color: "#fff" },
  list: { paddingBottom: 20 },
});

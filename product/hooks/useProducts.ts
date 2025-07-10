import { useEffect, useState, useCallback } from "react";
import { Product } from "../Product";
import api from "../api";

const LIMIT = 10;

export const useProducts = (search: string, category: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(
    async (reset = false) => {
      if (loading) return;
      setLoading(true);

      try {
        let url = `/products?limit=${LIMIT}&skip=${reset ? 0 : skip}`;
        if (search) {
          url = `/products/search?q=${search}&limit=${LIMIT}&skip=${reset ? 0 : skip}`;
        } else if (category) {
          url = `/products/category/${category}?limit=${LIMIT}&skip=${reset ? 0 : skip}`;
        }

        const res = await api.get<{ products: Product[]; total: number }>(url);

        const newProducts = reset ? res.data.products : [...products, ...res.data.products];

        setProducts(newProducts);
        setSkip(reset ? LIMIT : skip + LIMIT);
        setHasMore(newProducts.length < res.data.total);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [search, category, skip, products, loading]
  );

  // Reset products when search or category changes
  useEffect(() => {
    fetchProducts(true);
  }, [search, category]);

  return { products, fetchProducts, loading, hasMore };
};

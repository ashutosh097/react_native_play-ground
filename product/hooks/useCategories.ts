import { useEffect, useState } from "react";
import api from "../api";

export const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await api.get<string[]>("/products/categories");
      const data =res.data
      for (let i = 0; i < data.length; i++) {
           setCategories(prev => [...prev, data[i].name]);
      }
      setCategories(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, loading };
};

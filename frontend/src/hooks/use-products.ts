import { useState, useEffect } from 'react';
import { Product } from '@/types';
import * as api from '@/api/api';

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getProducts();
      // Ensure data is always an array
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      setError('Failed to fetch products');
      setProducts([]); // Set empty array on error
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  };
};

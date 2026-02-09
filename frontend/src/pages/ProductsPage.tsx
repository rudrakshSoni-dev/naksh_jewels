import React, { useEffect } from 'react';
import { useProducts } from '@/hooks/use-products';
import { ProductCard } from '@/components/ProductCard';
import { ProductSkeleton } from '@/components/ProductSkeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { debugAPI } from '@/api/debug';
import { DebugPanel } from '@/components/DebugPanel';

export const ProductsPage: React.FC = () => {
  const { products, loading, error, refetch } = useProducts();

  // Debug on mount
  useEffect(() => {
    debugAPI();
  }, []);

  // Log products state changes
  useEffect(() => {
    console.log('ProductsPage - State Update:');
    console.log('- Loading:', loading);
    console.log('- Error:', error);
    console.log('- Products:', products);
    console.log('- Products count:', products?.length);
  }, [products, loading, error]);

  if (loading) {
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription className="flex items-center justify-between">
            <span>{error}</span>
            <Button variant="outline" size="sm" onClick={refetch}>
              Retry
            </Button>
          </AlertDescription>
        </Alert>
        <DebugPanel />
      </div>
    );
  }

  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg mb-4">
            No products available at the moment.
          </p>
          <Button onClick={refetch} variant="outline">
            Refresh
          </Button>
        </div>
        <DebugPanel />
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(products) && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

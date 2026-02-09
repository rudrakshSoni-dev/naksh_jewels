import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, CartContextType } from '@/types';
import * as api from '@/api/api';
import { useToast } from '@/hooks/use-toast';

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Fetch cart on mount
  useEffect(() => {
    refreshCart();
  }, []);

  const refreshCart = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getCart();
      // Ensure data is always an array
      setCart(Array.isArray(data) ? data : []);
    } catch (err) {
      const errorMessage = 'Failed to fetch cart';
      setError(errorMessage);
      setCart([]); // Set empty array on error
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId: number, quantity: number): Promise<void> => {
    try {
      setError(null);
      await api.addToCart({ productId, quantity });
      await refreshCart();
      toast({
        title: "Success",
        description: "Item added to cart",
      });
    } catch (err) {
      const errorMessage = 'Failed to add item to cart';
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      console.error(err);
    }
  };

  const updateCartItem = async (id: number, quantity: number): Promise<void> => {
    try {
      setError(null);
      await api.updateCartItem(id, { quantity });
      await refreshCart();
    } catch (err) {
      const errorMessage = 'Failed to update cart item';
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      console.error(err);
    }
  };

  const removeFromCart = async (id: number): Promise<void> => {
    try {
      setError(null);
      await api.deleteCartItem(id);
      await refreshCart();
      toast({
        title: "Success",
        description: "Item removed from cart",
      });
    } catch (err) {
      const errorMessage = 'Failed to remove item from cart';
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      console.error(err);
    }
  };

  const getTotalItems = (): number => {
    if (!Array.isArray(cart)) return 0;
    const total = cart.reduce((total, item) => {
      const quantity = Number(item.quantity) || 0;
      return total + quantity;
    }, 0);
    return Number(total) || 0;
  };

  const getTotalPrice = (): number => {
    if (!Array.isArray(cart)) return 0;
    const total = cart.reduce((total, item) => {
      const price = Number(item.product?.price) || 0;
      const quantity = Number(item.quantity) || 0;
      return total + (price * quantity);
    }, 0);
    return Number(total) || 0;
  };

  const value: CartContextType = {
    cart,
    loading,
    error,
    addToCart,
    updateCartItem,
    removeFromCart,
    refreshCart,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

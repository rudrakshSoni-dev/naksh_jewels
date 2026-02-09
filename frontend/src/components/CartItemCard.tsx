import React from 'react';
import { CartItem } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemCardProps {
  item: CartItem;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const { updateCartItem, removeFromCart } = useCart();

  const handleIncrease = async () => {
    await updateCartItem(item.productId, item.quantity + 1);
  };

  const handleDecrease = async () => {
    if (item.quantity > 1) {
      await updateCartItem(item.productId, item.quantity - 1);
    }
  };

  const handleRemove = async () => {
    await removeFromCart(item.productId);
  };

  const price = Number(item.product?.price) || 0;
  const quantity = Number(item.quantity) || 0;
  const itemTotal = price * quantity;

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-4">
          {/* Product Image */}
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
            {item.product?.image && (
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg">
                {item.product?.name || 'Unknown Product'}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                ₹{price.toFixed(2)} each
              </p>
            </div>

            <div className="flex items-center justify-between mt-2">
              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={handleDecrease}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-medium">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={handleIncrease}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Item Total and Remove */}
              <div className="flex items-center space-x-4">
                <span className="font-bold text-lg">
                  ${itemTotal.toFixed(2)}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-destructive hover:text-destructive"
                  onClick={handleRemove}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

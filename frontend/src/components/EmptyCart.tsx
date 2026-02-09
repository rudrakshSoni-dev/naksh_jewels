import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const EmptyCart: React.FC = () => {
  return (
    <Card className="mt-8">
      <CardContent className="flex flex-col items-center justify-center py-16">
        <ShoppingCart className="h-24 w-24 text-muted-foreground/50 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6 text-center max-w-md">
          Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
        </p>
        <Button asChild>
          <Link to="/">Browse Products</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

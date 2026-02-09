import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { ProductsPage } from '@/pages/ProductsPage';
import { CartPage } from '@/pages/CartPage';
import { Toaster } from '@/components/ui/toaster';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          <Toaster />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;

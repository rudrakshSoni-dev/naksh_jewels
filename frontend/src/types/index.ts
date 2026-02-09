/* ================= API WRAPPERS ================= */

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

/* Cart uses "cart" key instead of "data" */
export interface CartResponse<T> {
  success: boolean;
  cart: T;
}

/* ================= PRODUCT ================= */

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

/* ================= CART ================= */

/* matches backend EXACTLY */
export interface CartItem {
  productId: number;
  quantity: number;
  price?: number; // Optional price field for frontend use
  image?: string; // Optional image field for frontend use
  name?: string;  // Optional name field for frontend use
  product?: Product; // Optional product details for frontend use
  
}

/*
 Optional enriched version (frontend only)
 if you later join product details
*/
export interface CartItemWithProduct extends CartItem {
  product?: Product;
}

/* ================= REQUEST TYPES ================= */

export interface AddToCartRequest {
  productId: number;
  quantity: number;
}

export interface UpdateCartRequest {
  quantity: number;
}

/* ================= CONTEXT ================= */

export interface CartContextType {
  cart: CartItem[];

  loading: boolean;
  error: string | null;

  addToCart: (productId: number, quantity: number) => Promise<void>;
  updateCartItem: (id: number, quantity: number) => Promise<void>;
  removeFromCart: (id: number) => Promise<void>;
  refreshCart: () => Promise<void>;

  getTotalItems: () => number;
  getTotalPrice: () => number;
}

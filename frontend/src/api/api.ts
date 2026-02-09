import axiosInstance from "./axios";
import {
  Product,
  CartItem,
  AddToCartRequest,
  UpdateCartRequest,
  ApiResponse,
  CartResponse,
} from "@/types";

/* =================================================
   PRODUCTS ( backend → { success, data } )
================================================= */

export const getProducts = async (): Promise<Product[]> => {
  const res = await axiosInstance.get<ApiResponse<Product[]>>("/products");
  return res.data.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const res = await axiosInstance.get<ApiResponse<Product>>(`/products/${id}`);
  return res.data.data;
};

/* =================================================
   CART ( backend → { success, cart } )
================================================= */

export const getCart = async (): Promise<CartItem[]> => {
  const res = await axiosInstance.get<CartResponse<CartItem[]>>("/cart");
  return res.data.cart;
};

export const addToCart = async (
  body: AddToCartRequest
): Promise<CartItem[]> => {
  const res = await axiosInstance.post<CartResponse<CartItem[]>>("/cart", body);
  return res.data.cart;
};

export const updateCartItem = async (
  id: number,
  body: UpdateCartRequest
): Promise<CartItem[]> => {
  const res = await axiosInstance.patch<CartResponse<CartItem[]>>(
    `/cart/${id}`,
    body
  );
  return res.data.cart;
};

export const deleteCartItem = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/cart/${id}`);
};

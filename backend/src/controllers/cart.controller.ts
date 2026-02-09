import { Request, Response, NextFunction } from "express";

/* ---------------- TYPES ---------------- */

interface CartItem {
  productId: number;
  quantity: number;
}

/* ---------------- STATE ---------------- */

let cart: CartItem[] = [];

/* ---------------- CONTROLLERS ---------------- */

export const addToCart = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { productId, quantity }: CartItem = req.body;

    const existing = cart.find(item => item.productId === productId);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ productId, quantity });
    }

    res.status(201).json({
      success: true,
      message: "Item added to cart",
      cart,
    });
  } catch (err) {
    next(err);
  }
};

export const getCart = (req: Request, res: Response): void => {
  res.json({
    success: true,
    cart,
  });
};

export const removeFromCart = (req: Request, res: Response): void => {
  const id = Number(req.params.id);

  cart = cart.filter(item => item.productId !== id);

  res.json({
    success: true,
    message: "Item removed",
    cart,
  });
};

export const updateQuantity = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const { quantity }: { quantity: number } = req.body;

  const item = cart.find(i => i.productId === id);

  if (!item) {
    res.status(404).json({ message: "Item not found" });
    return;
  }

  item.quantity = quantity;

  res.json({
    success: true,
    cart,
  });
};

import { Request, Response, NextFunction } from "express";
import { products } from "../data/products";

/* ------------ TYPES ------------ */

export interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
}

/* ------------ GET ALL PRODUCTS ------------ */

export const getProducts = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    res.status(200).json({
      success: true,
      data: products, // no casting needed if typed at source
    });
  } catch (err) {
    next(err);
  }
};

/* ------------ GET PRODUCT BY ID ------------ */

export const getProductById = (
  req: Request<{ id: string }>, // typed params
  res: Response,
  next: NextFunction
): void => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      res.status(400).json({ message: "Invalid product id" });
      return;
    }

    const product = products.find(p => p.id === id);

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    next(err);
  }
};

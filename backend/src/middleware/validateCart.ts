import { Request, Response, NextFunction } from "express";

interface CartBody {
  productId: number;
  quantity: number;
}

const validateCart = (
  req: Request<{}, {}, CartBody>,
  res: Response,
  next: NextFunction
): void => {
  const { productId, quantity } = req.body;
  if (productId == null || quantity == null) {
    res.status(400).json({
      message: "productId and quantity are required",
    });
    return;
  }

  if (typeof quantity !== "number" || quantity <= 0) {
    res.status(400).json({
      message: "quantity must be greater than 0",
    });
    return;
  }

  next();
};

export default validateCart;

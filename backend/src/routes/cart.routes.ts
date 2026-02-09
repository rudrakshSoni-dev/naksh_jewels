import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
  updateQuantity
} from "../controllers/cart.controller";

import validateCart from "../middleware/validateCart";

const router = express.Router();

router.get("/", getCart);
router.post("/", validateCart, addToCart);
router.delete("/:id", removeFromCart);
router.patch("/:id", updateQuantity);

export default router;

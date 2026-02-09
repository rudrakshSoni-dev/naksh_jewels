"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateCart = (req, res, next) => {
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
exports.default = validateCart;

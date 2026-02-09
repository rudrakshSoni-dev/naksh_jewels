"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateQuantity = exports.removeFromCart = exports.getCart = exports.addToCart = void 0;
/* ---------------- STATE ---------------- */
let cart = [];
/* ---------------- CONTROLLERS ---------------- */
const addToCart = (req, res, next) => {
    try {
        const { productId, quantity } = req.body;
        const existing = cart.find(item => item.productId === productId);
        if (existing) {
            existing.quantity += quantity;
        }
        else {
            cart.push({ productId, quantity });
        }
        res.status(201).json({
            success: true,
            message: "Item added to cart",
            cart,
        });
    }
    catch (err) {
        next(err);
    }
};
exports.addToCart = addToCart;
const getCart = (req, res) => {
    res.json({
        success: true,
        cart,
    });
};
exports.getCart = getCart;
const removeFromCart = (req, res) => {
    const id = Number(req.params.id);
    cart = cart.filter(item => item.productId !== id);
    res.json({
        success: true,
        message: "Item removed",
        cart,
    });
};
exports.removeFromCart = removeFromCart;
const updateQuantity = (req, res) => {
    const id = Number(req.params.id);
    const { quantity } = req.body;
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
exports.updateQuantity = updateQuantity;

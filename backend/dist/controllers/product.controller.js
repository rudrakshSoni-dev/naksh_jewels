"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getProducts = void 0;
const products_1 = require("../data/products");
/* ------------ GET ALL PRODUCTS ------------ */
const getProducts = (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: products_1.products, // no casting needed if typed at source
        });
    }
    catch (err) {
        next(err);
    }
};
exports.getProducts = getProducts;
/* ------------ GET PRODUCT BY ID ------------ */
const getProductById = (req, // typed params
res, next) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            res.status(400).json({ message: "Invalid product id" });
            return;
        }
        const product = products_1.products.find(p => p.id === id);
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
    }
    catch (err) {
        next(err);
    }
};
exports.getProductById = getProductById;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/product.routes";
import cartRoutes from "./routes/cart.routes";
import errorHandler from "./middleware/errorHandler";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

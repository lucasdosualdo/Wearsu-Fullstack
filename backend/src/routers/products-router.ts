import {
  postProduct,
  getProducts,
  getProductsByModel,
  updateProduct,
} from "@/controllers/products-controller";
import { validateBody } from "@/middlewares/validation-middleware";
import { createProductSchema } from "@/schemas/product-schema";
import { Router } from "express";
import { authenticateToken } from "@/middlewares/authentication-middleware";

const productsRouter = Router();

productsRouter
  .all("/*", authenticateToken)
  .post("/create", validateBody(createProductSchema), postProduct)
  .get("/", getProducts)
  .get("/:model", getProductsByModel)
  .put("/update/:productId", updateProduct);

export { productsRouter };

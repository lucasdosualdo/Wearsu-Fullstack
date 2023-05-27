import { postProduct } from "@/controllers/products-controller";
import { validateBody } from "@/middlewares/validation-middleware";
import { createProductSchema } from "@/schemas/product-schema";
import { Router } from "express";

const productsRouter = Router();

productsRouter.post("/create", validateBody(createProductSchema), postProduct);

export { productsRouter };

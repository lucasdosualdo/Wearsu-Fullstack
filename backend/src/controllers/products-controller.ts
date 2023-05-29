import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares/authentication-middleware";
import httpStatus from "http-status";
import {
  CreateProductParams,
  GetProductsParams,
  InputProductParams,
} from "@/protocols";
import productsService from "@/services/products-service";

export async function postProduct(req: AuthenticatedRequest, res: Response) {
  const productBody: InputProductParams = req.body;
  const { userId } = req;
  try {
    const product: CreateProductParams = await productsService.createProduct(
      productBody,
      userId
    );

    return res.status(httpStatus.CREATED).send(product);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function getProducts(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    const products: GetProductsParams = await productsService.getProducts(
      userId
    );
    return res.status(httpStatus.OK).send(products);
  } catch (error) {
    if (error.name === "BadRequestError") {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

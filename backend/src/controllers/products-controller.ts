import { Request, Response } from "express";
import { AuthenticatedRequest } from "@/middlewares/authentication-middleware";
import httpStatus from "http-status";
import { CreateProductParams, InputProductParams } from "@/protocols";
import productsService from "@/services/products-service";
import { products } from "@prisma/client";

export async function postProduct(req: Request, res: Response) {
  const productBody: InputProductParams = req.body;

  try {
    const product: CreateProductParams = await productsService.createProduct(
      productBody
    );

    return res.status(httpStatus.CREATED).send(product);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function getProducts(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    const products: products[] = await productsService.getProducts(userId);
    return res.status(httpStatus.OK).send(products);
  } catch (error) {
    if (error.name === "BadRequestError") {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

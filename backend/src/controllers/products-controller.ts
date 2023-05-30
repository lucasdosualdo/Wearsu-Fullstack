import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import httpStatus from "http-status";
import {
  CreateProductParams,
  GetProductsParams,
  InputProductParams,
  PaginationParams,
} from "../protocols";
import productsService from "../services/products-service";
import { products } from "@prisma/client";

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
    if (error.name === "BadRequestError") {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function updateProduct(req: AuthenticatedRequest, res: Response) {
  const productBody: InputProductParams = req.body;
  const productId: number = Number(req.params.productId);
  try {
    const product: CreateProductParams = await productsService.updateProduct(
      productBody,
      productId
    );

    return res.status(httpStatus.OK).send(product);
  } catch (error) {
    if (error.name === "BadRequestError") {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function deleteProduct(req: AuthenticatedRequest, res: Response) {
  const productId: number = Number(req.params.productId);
  try {
    const deletedProdut: products = await productsService.deleteProduct(
      productId
    );
    return res.status(httpStatus.OK).send({
      "product deleted": deletedProdut,
    });
  } catch (error) {
    if (error.name === "BadRequestError") {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function getProducts(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const from: number = Number(req.query.from);
  const to: number = Number(req.query.to);
  const paginationIndexes: PaginationParams = {
    from,
    to,
  };
  try {
    const products: GetProductsParams = await productsService.getProducts(
      userId,
      paginationIndexes
    );
    return res.status(httpStatus.OK).send(products);
  } catch (error) {
    if (error.name === "BadRequestError") {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

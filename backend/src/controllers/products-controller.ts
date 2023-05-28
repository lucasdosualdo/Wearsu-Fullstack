import { Request, Response } from "express";
import httpStatus from "http-status";
import { CreateProductParams, InputProductParams } from "@/protocols";
import productsService from "@/services/products-service";

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

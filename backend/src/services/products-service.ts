import { badRequestError } from "@/errors/bad-request-error";
import {
  CreateProductParams,
  InputProductParams,
  GetProductsParams,
} from "@/protocols";
import productsRepository from "@/repositories/products-repository";
import { products } from "@prisma/client";

async function createProduct(
  data: InputProductParams,
  userId: number
): Promise<CreateProductParams> {
  try {
    if (!userId) {
      throw badRequestError();
    }
    const reference: string = await generateRandomReference(10);
    const productBody: CreateProductParams = { ...data, reference };
    const { id, ...product } = await productsRepository.create(productBody);
    return product;
  } catch (error) {
    throw new Error("Error on product creation: " + error.message);
  }
}

async function updateProduct(
  data: InputProductParams,
  productId: number
): Promise<CreateProductParams> {
  try {
    if (!productId) {
      throw badRequestError();
    }
    const reference: string = await generateRandomReference(10);
    const productBody: CreateProductParams = { ...data, reference };
    const { id, ...product } = await productsRepository.update(
      productBody,
      productId
    );
    return product;
  } catch (error) {
    throw new Error("Error on product creation: " + error.message);
  }
}

async function generateRandomReference(length: number): Promise<string> {
  const characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let reference: string = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    reference += characters.charAt(randomIndex);
  }
  const result: products | null = await productsRepository.checkReference(
    reference
  );
  if (result) {
    return generateRandomReference(length);
  }
  return reference;
}

async function getProducts(userId: number): Promise<GetProductsParams> {
  if (!userId) {
    throw badRequestError();
  }
  const totalProducts: number = await getProductsNumber(userId);
  const products: products[] = await productsRepository.getAll(userId);
  return { totalProducts, products };
}

async function getProductsByModel(
  userId: number,
  model: string
): Promise<GetProductsParams> {
  if (!userId || !model) {
    throw badRequestError();
  }
  const totalProducts: number = await getProductsNumber(userId, model);
  const products: products[] = await productsRepository.getByModel(
    userId,
    model
  );
  return { totalProducts, products };
}

async function getProductsNumber(
  userId: number,
  model?: string
): Promise<number> {
  if (model) {
    return productsRepository.countByModel(userId, model);
  }
  return productsRepository.count(userId);
}

const productsService = {
  createProduct,
  getProducts,
  getProductsByModel,
  updateProduct,
};

export default productsService;

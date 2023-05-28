import { badRequestError } from "@/errors/bad-request-error";
import { CreateProductParams, InputProductParams } from "@/protocols";
import productsRepository from "@/repositories/products-repository";
import { products } from "@prisma/client";

async function createProduct(
  data: InputProductParams
): Promise<CreateProductParams> {
  try {
    const reference: string = await generateCustomReference(10);
    const productBody: CreateProductParams = { ...data, reference };
    const { id, ...product } = await productsRepository.create(productBody);
    return product;
  } catch (error) {
    throw new Error("Erro ao criar o produto: " + error.message);
  }
}

async function generateCustomReference(length: number): Promise<string> {
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
    return generateCustomReference(length);
  }
  return reference;
}

async function getProducts(userId: number): Promise<products[]> {
  if (!userId) {
    throw badRequestError();
  }
  const products: products[] = await productsRepository.getAll(userId);
  return products;
}

const productsService = {
  createProduct,
  getProducts,
};

export default productsService;

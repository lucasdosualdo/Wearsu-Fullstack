import { CreateProductParams } from "@/protocols";
import productsRepository from "@/repositories/products-repository";

async function createProduct(
  data: CreateProductParams
): Promise<CreateProductParams> {
  try {
    const { id, ...product } = await productsRepository.create(data);
    return product;
  } catch (error) {
    throw new Error("Erro ao criar o produto: " + error.message);
  }
}

const productsService = {
  createProduct,
};

export default productsService;

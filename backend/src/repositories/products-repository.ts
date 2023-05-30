import { products } from "@prisma/client";
import prisma from "@/config/database";
import { CreateProductParams, PaginationParams } from "@/protocols";

async function create(data: CreateProductParams): Promise<products> {
  return prisma.products.create({
    data,
  });
}
async function update(
  data: CreateProductParams,
  productId: number
): Promise<products> {
  return prisma.products.update({
    where: {
      id: productId,
    },
    data,
  });
}

async function deleteProduct(productId: number): Promise<products> {
  return prisma.products.delete({
    where: {
      id: productId,
    },
  });
}

async function checkReference(reference: string): Promise<products | null> {
  return prisma.products.findFirst({
    where: {
      reference,
    },
  });
}

async function getAll(
  userId: number,
  paginationIndexes: PaginationParams
): Promise<products[]> {
  return prisma.products.findMany({
    where: {
      user_id: userId,
    },
    skip: paginationIndexes.from,
    take: paginationIndexes.to,
  });
}

async function count(userId: number): Promise<number> {
  return prisma.products.count({
    where: {
      user_id: userId,
    },
  });
}
async function countByModel(userId: number, model: string): Promise<number> {
  return prisma.products.count({
    where: {
      user_id: userId,
      model,
    },
  });
}

async function pagination(userId: number, from: number, to: number) {
  const products = await prisma.products.findMany({
    where: {
      user_id: userId,
    },
    skip: from,
    take: to,
  });

  return products;
}

const productsRepository = {
  create,
  checkReference,
  getAll,
  count,
  countByModel,
  update,
  deleteProduct,
  pagination,
};

export default productsRepository;

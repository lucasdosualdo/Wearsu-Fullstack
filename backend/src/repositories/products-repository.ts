import { products } from "@prisma/client";
import prisma from "@/config/database";
import { CreateProductParams } from "@/protocols";

async function create(data: CreateProductParams): Promise<products> {
  return prisma.products.create({
    data,
  });
}
async function update(data: CreateProductParams, productId: number) {
  return prisma.products.update({
    where: {
      id: productId,
    },
    data,
  });
}

async function checkReference(reference: string): Promise<products | null> {
  return prisma.products.findFirst({
    where: {
      reference,
    },
  });
}

async function getAll(userId: number): Promise<products[]> {
  return prisma.products.findMany({
    where: {
      user_id: userId,
    },
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

async function getByModel(userId: number, model: string): Promise<products[]> {
  return prisma.products.findMany({
    where: {
      user_id: userId,
      model,
    },
  });
}

const productsRepository = {
  create,
  checkReference,
  getAll,
  count,
  getByModel,
  countByModel,
  update,
};

export default productsRepository;

import { products } from "@prisma/client";
import prisma from "@/config/database";
import { CreateProductParams } from "@/protocols";

async function create(data: CreateProductParams): Promise<products> {
  return prisma.products.create({
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

const productsRepository = {
  create,
  checkReference,
  getAll,
};

export default productsRepository;

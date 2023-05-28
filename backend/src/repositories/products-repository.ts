import { products, Prisma } from "@prisma/client";
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

const productsRepository = {
  create,
  checkReference
};

export default productsRepository;

import { products, Prisma } from "@prisma/client";
import prisma from "@/config/database";
import { CreateProductParams } from "../protocols";

async function create(data: CreateProductParams): Promise<products> {
  return prisma.products.create({
    data,
  });
}

const productsRepository = {
  create,
};

export default productsRepository;

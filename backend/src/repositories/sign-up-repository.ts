import prisma from "../config/database";
import { SignUpParams } from "../protocols";
import { users } from "@prisma/client";

async function findByEmail(email: string): Promise<users> {
  return prisma.users.findFirst({
    where: {
      email,
    },
  });
}

async function findMany(): Promise<users[]> {
  return prisma.users.findMany();
}

async function create(data: SignUpParams): Promise<users> {
  return prisma.users.create({
    data,
  });
}

const signUpRepository = {
  findByEmail,
  findMany,
  create,
};

export default signUpRepository;

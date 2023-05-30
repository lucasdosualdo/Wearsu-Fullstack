import prisma from "../config/database";
import { users, sessions } from "@prisma/client";

async function findByEmail(email: string): Promise<users> {
  return prisma.users.findFirst({
    where: {
      email,
    },
  });
}

async function update(userId: number): Promise<void> {
  await prisma.sessions.updateMany({
    where: { userId },
    data: {
      valid: false,
    },
  });
}

async function create(data: CreateSessionParams): Promise<sessions> {
  return prisma.sessions.create({
    data,
  });
}

const signInRepository = {
  findByEmail,
  update,
  create,
};

type CreateSessionParams = {
  token: string;
  userId: number;
};

export default signInRepository;

import bcrypt from "bcrypt";
import { users } from "@prisma/client";
import { SignUpParams, CreatedUser } from "@/protocols";
import { invalidSignUpError } from "@/errors/invalid-signup-error";
import signUpRepository from "@/repositories/sign-up-repository";

async function createUser({
  name,
  email,
  password,
}: SignUpParams): Promise<CreatedUser> {
  await validateUniqueEmailOrFail(email);

  await checkPasswordExists(password);

  const hashedPassword = await bcrypt.hash(password, 10);

  const user: users = await signUpRepository.create({
    name,
    email,
    password: hashedPassword,
  });

  return { name: user.name, email: user.email };
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await signUpRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw invalidSignUpError();
  }
}

async function checkPasswordExists(password: string) {
  const users = await signUpRepository.findMany();
  const existsPassword = users.some((user) =>
    bcrypt.compareSync(password, user.password)
  );
  if (existsPassword) throw invalidSignUpError();
}

const signUpService = {
  createUser,
};

export default signUpService;

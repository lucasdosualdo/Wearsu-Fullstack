import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SignInParams, UserSessionParams } from "../protocols";
import { sessions, users } from "@prisma/client";
import signInRepository from "../repositories/sign-in-repository";
import { invalidCredentialsError } from "../errors/invalid-credentials-error";
import { cannotCreateSessionError } from "../errors/cannot-create-session-error";

async function signIn({
  email,
  password,
}: SignInParams): Promise<UserSessionParams> {
  const user: users = await getUserOrFail(email);
  await validatePasswordOrFail(password, user.password);
  const token: string = await createSession(user.id);
  return { userId: user.id, name: user.name, email: user.email, token };
}

async function getUserOrFail(email: string): Promise<users> {
  const user = await signInRepository.findByEmail(email);

  if (!user) throw invalidCredentialsError();

  return user;
}

async function validatePasswordOrFail(
  password: string,
  userPassword: string
): Promise<void> {
  const isPasswordValid: boolean = await bcrypt.compare(password, userPassword);

  if (!isPasswordValid) {
    throw invalidCredentialsError();
  }
}

async function createSession(userId: number): Promise<string> {
  const token: string = jwt.sign({ userId }, process.env.JWT_SECRET);
  await updateToken(userId);
  const session: sessions = await signInRepository.create({
    token,
    userId,
  });

  if (!session) throw cannotCreateSessionError();

  return token;
}

async function updateToken(userId: number): Promise<void> {
  await signInRepository.update(userId);
}

const signInService = {
  signIn,
};

export default signInService;

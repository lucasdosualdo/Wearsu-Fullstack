import { users } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type SignInParams = Pick<users, "email" | "password">;

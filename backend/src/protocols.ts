import { users, products } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type SignInParams = Pick<users, "email" | "password">;

export type SignUpParams = Pick<users, "name" | "email" | "password">;

export type CreateProductParams = Omit<products, "id">;
export type CreatedUser = Omit<users, "id" | "password">;

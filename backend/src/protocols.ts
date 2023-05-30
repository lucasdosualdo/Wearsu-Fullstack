import { users, products } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type SignInParams = Pick<users, "email" | "password">;

export type SignUpParams = Pick<users, "name" | "email" | "password">;

export type InputProductParams = Omit<products, "id" | "reference">;
export type CreateProductParams = Omit<products, "id">;

export type CreatedUser = Omit<users, "id" | "password">;

export type UserSessionParams = {
  userId: number;
  name: string;
  email: string;
  token: string;
};

export type GetProductsParams = {
  totalProducts: number;
  products: products[];
};

export type PaginationParams = {
  from: number;
  to: number;
};

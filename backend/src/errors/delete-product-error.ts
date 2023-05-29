import { ApplicationError } from "../protocols";

export function deleteProductError(): ApplicationError {
  return {
    name: "DeleteProductError",
    message: "Cannot proccess the product deletion",
  };
}
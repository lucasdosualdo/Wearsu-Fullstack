import { ApplicationError } from "../protocols";

export function invalidSignUpError(): ApplicationError {
  return {
    name: "InvalidSignUpError",
    message: "Invalid email or password to sign-up",
  };
}

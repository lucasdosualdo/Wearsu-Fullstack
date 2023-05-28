import { ApplicationError } from "../protocols";

export function cannotCreateSessionError(): ApplicationError {
  return {
    name: "CannotCreateSessionError",
    message: "failed to create a session from the given user",
  };
}

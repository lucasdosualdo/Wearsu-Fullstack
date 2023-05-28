import { Request, Response } from "express";
import httpStatus from "http-status";
import { SignUpParams, CreatedUser } from "@/protocols";
import signUpService from "@/services/sign-up-service";

export async function postSignUp(req: Request, res: Response) {
  const { name, email, password }: SignUpParams = req.body;
  try {
    const user: CreatedUser = await signUpService.createUser({
      name,
      email,
      password,
    });
    return res.status(httpStatus.CREATED).send(user);
  } catch (error) {
    if (error.name === "InvalidSignUpError") {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

import { SignInParams } from "../protocols";
import { Request, Response } from "express";
import httpStatus from "http-status";
import signInService from "../services/sign-in-service";

export async function postSignIn(req: Request, res: Response) {
  const { email, password }: SignInParams = req.body;

  try {
    const result = await signInService.signIn({ email, password });
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    if (error.name === "InvalidCredentialsError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
    if (error.name === "CannotCreateSessionError") {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

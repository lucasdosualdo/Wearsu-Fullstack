import { Router } from "express";
import { signInSchema } from "../schemas/authentication-schema";
import { validateBody } from "../middlewares/validation-middleware";
import { postSignIn } from "../controllers/sign-in-controller";

const signInRouter = Router();

signInRouter.post("/", validateBody(signInSchema), postSignIn);

export { signInRouter };

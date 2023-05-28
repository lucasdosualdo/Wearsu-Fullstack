import { Router } from "express";
import { validateBody } from "@/middlewares/validation-middleware";
import { createUserSchema } from "@/schemas/user-schema";
import { postSignUp } from "@/controllers/signup-controller";
const signUpRouter = Router();
signUpRouter.post("/", validateBody(createUserSchema), postSignUp);

export { signUpRouter };

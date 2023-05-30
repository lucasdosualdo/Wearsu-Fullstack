import { SignUpParams } from "../protocols";

import Joi from "joi";

export const createUserSchema = Joi.object<SignUpParams>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
});

import { CreateProductParams } from "@/protocols";

import Joi from "joi";

export const createUserSchema = Joi.object<CreateProductParams>({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().precision(2).required(),
  quantity: Joi.number().integer().required(),
  model: Joi.string().required(),
  reference: Joi.string().required(),
  brand: Joi.string().required(),
  image_url: Joi.string().required(),
  user_id: Joi.number().integer().required(),
});

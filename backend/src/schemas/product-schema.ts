import { CreateProductParams } from "../protocols";

import Joi from "joi";

export const createProductSchema = Joi.object<CreateProductParams>({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().precision(2).required(),
  quantity: Joi.number().integer().required(),
  model: Joi.string().required(),
  brand: Joi.string().required(),
  image_url: Joi.string().uri().required(),
  user_id: Joi.number().integer().required(),
});

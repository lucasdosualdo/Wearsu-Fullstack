import express, { Express } from "express";
import cors from "cors";
import { productsRouter } from "./routers";

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK"))
  .use("/products", productsRouter);

export function init(): Promise<Express> {
  return Promise.resolve(app);
}

export default app;

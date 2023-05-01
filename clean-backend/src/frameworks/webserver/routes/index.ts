import Express, { Application } from "express";
import authRouter from "./auth";

const routes = (app: Application, express: typeof Express) => {
  app.use("/", authRouter(express));
};

export default routes;

import { Application } from "express";
import authRouter from "./auth";

const routes = (app:Application) => {
    app.use('/',authRouter());
}

export default routes
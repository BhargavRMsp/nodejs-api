import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";

/*
 * * Routes
 */

import auth from "./routes/authentication.js";
import user from "./routes/user.js";

const app = express();

dotenv.config({ path: "config/config.env" });

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api/v1", auth);
app.use("/api/v1", user);

export default app;
